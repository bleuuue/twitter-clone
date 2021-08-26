import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { FC } from 'react';
import { ITweet } from '../../interfaces';
import { MutatorCallback } from 'swr/dist/types';

interface LikeButtonProps {
  tweet: ITweet;
  countMutate: (
    data?: number | Promise<number> | MutatorCallback<number> | undefined,
    shouldRevalidate?: boolean | undefined,
  ) => Promise<number | undefined>;
}

const LikeButton: FC<LikeButtonProps> = ({ tweet, countMutate }) => {
  const onClickLike = async () => {
    try {
      const token = localStorage.getItem('token');

      const response = await axios.put(
        `${process.env.REACT_APP_BACK_URL}/likes/tweets/${tweet.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.statusText === 'OK') {
        countMutate();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button onClick={onClickLike}>
      <FontAwesomeIcon icon={farHeart} />
    </button>
  );
};
export default LikeButton;
