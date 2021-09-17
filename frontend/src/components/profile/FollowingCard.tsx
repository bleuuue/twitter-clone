import React, { FC } from 'react';
import { IFollowing } from '../../interfaces';
import ProfileIcon from '../common/ProfileIcon';
import { Link } from 'react-router-dom';

interface FollowingCardProps {
  following: IFollowing;
}

const FollowingCard: FC<FollowingCardProps> = ({ following }) => {
  return (
    <Link to={`/profile/${following.follower.id}`}>
      <li className="flex border-b-1">
        <div className="m-4">
          <ProfileIcon userId={following.follower.id} />
        </div>
        <div className="mt-6 text-sm w-full mr-4">
          <div>{following.follower.nickname}</div>
          <div className="mt-1">
            {following.follower.introduce
              ? following.follower.introduce
              : 'No Introduce'}
          </div>
        </div>
      </li>
    </Link>
  );
};

export default FollowingCard;
