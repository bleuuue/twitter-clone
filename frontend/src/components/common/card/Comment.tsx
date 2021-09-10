import React, { FC, useContext } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import { IComment, ITweet } from '../../../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt as farTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { MeContext } from '../../../contexts';
import axios from 'axios';
import { toastError, toastSuccess } from '../../../utils/toastify';
import { useCommentList } from '../../../hooks/useCommentList';
import { useCommentCount } from '../../../hooks/useCommentCount';

interface CommentProps {
  comment: IComment;
  tweet: ITweet;
}

const Comment: FC<CommentProps> = ({ comment, tweet }) => {
  dayjs.extend(relativeTime);

  const { me } = useContext(MeContext);

  const { mutate: countMutate } = useCommentCount(tweet);
  const { mutate: commentMutate } = useCommentList(tweet);

  const onClickCommentDelete = async () => {
    try {
      const token = localStorage.getItem('token');

      const response = await axios.delete(
        `${process.env.REACT_APP_BACK_URL}/comments/${comment.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.statusText === 'OK') {
        commentMutate();
        countMutate();
        toastSuccess('댓글 삭제');
      }
    } catch (error: any) {
      console.error(error);
      toastError(error.response.data.message);
    }
  };
  return (
    <li className="flex justify-between items-center my-1 text-xs w-60">
      <div>
        <span className="font-bold mr-2 text-sm">{comment.user.nickname}</span>
        {comment.comment}
      </div>
      <div>
        {me === comment.user.id && (
          <button className="mr-2" onClick={onClickCommentDelete}>
            <FontAwesomeIcon icon={farTrashAlt} />
          </button>
        )}
        {dayjs(comment.createdAt).locale('ko').fromNow()}
      </div>
    </li>
  );
};

export default Comment;
