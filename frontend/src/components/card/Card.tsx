import React, { FC } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComment as farComment,
  faHeart as farHeart,
} from '@fortawesome/free-regular-svg-icons';
import { faEllipsisH, faRetweet } from '@fortawesome/free-solid-svg-icons';
import Like from './Like';
import ProfileIcon from '../ProfileIcon';
import { ITweet } from '../../interfaces';

interface CardProps {
  tweet: ITweet;
}

const Card: FC<CardProps> = ({ tweet }) => {
  dayjs.extend(relativeTime);

  return (
    <li className="flex border-b-1">
      <div className="mt-4 mx-4">
        <ProfileIcon />
      </div>
      <div className="mt-6 text-sm w-full mr-4">
        <span className="font-bold">{tweet.users.nickname}</span>
        <span className="ml-2 text-gray-500">
          {dayjs(tweet.createdAt).locale('ko').fromNow()}
        </span>
        <div>{tweet.tweet}</div>
        <div className="flex justify-between my-4">
          <div className="w-full">
            <FontAwesomeIcon icon={farComment} />
            <span className="ml-2">123</span>
          </div>
          <div className="w-full">
            <FontAwesomeIcon icon={faRetweet} />
            <span className="ml-2">123</span>
          </div>
          <Like tweet={tweet} />
          <div className="w-full">
            <FontAwesomeIcon icon={faEllipsisH} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
