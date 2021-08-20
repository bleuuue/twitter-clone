import React, { FC } from 'react';
import { ITweet } from '../interfaces';
import ProfileIcon from './ProfileIcon';

interface CardProps {
  tweet: ITweet;
}

const Card: FC<CardProps> = ({ tweet }) => {
  return (
    <div>
      <ProfileIcon />
      {tweet.tweet}
    </div>
  );
};

export default Card;
