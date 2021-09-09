import React, { FC } from 'react';
import { IComment } from '../../../interfaces';

interface CommentProps {
  comment: IComment;
}

const Comment: FC<CommentProps> = ({ comment }) => {
  return (
    <li>
      <div>
        <span>{comment.user.nickname}</span>
      </div>
      <div>{comment.createdAt}</div>
    </li>
  );
};

export default Comment;
