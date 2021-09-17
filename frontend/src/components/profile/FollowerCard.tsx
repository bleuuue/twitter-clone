import React, { FC } from 'react';
import { IFollower } from '../../interfaces';
import ProfileIcon from '../common/ProfileIcon';
import { Link } from 'react-router-dom';

interface FollowerCardProps {
  follower: IFollower;
}

const FollowerCard: FC<FollowerCardProps> = ({ follower }) => {
  return (
    <Link to={`/profile/${follower.following.id}`}>
      <li className="flex border-b-1">
        <div className="m-4">
          <ProfileIcon userId={follower.following.id} />
        </div>
        <div className="mt-6 text-sm w-full mr-4">
          <div>{follower.following.nickname}</div>
          <div className="mt-1">
            {follower.following.introduce
              ? follower.following.introduce
              : 'No Introduce'}
          </div>
        </div>
      </li>
    </Link>
  );
};

export default FollowerCard;
