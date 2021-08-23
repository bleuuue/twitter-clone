import React, { FC } from 'react';
import { ITweet } from '../interfaces';
import ProfileIcon from './ProfileIcon';

interface CardProps {
  tweet: ITweet;
}

const Card: FC<CardProps> = ({ tweet }) => {
  return (
    <div className="flex">
      <div>
        <ProfileIcon />
      </div>
      <div className="font-noto">{tweet.users.nickname}</div>
    </div>
  );
};

export default Card;
