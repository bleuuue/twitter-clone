import React, { FC } from 'react';
import { IFollower } from '../../interfaces';
import ProfileIcon from '../common/ProfileIcon';

interface FollowerCardProps {
  follower: IFollower;
}

const FollowerCard: FC<FollowerCardProps> = ({ follower }) => {
  return (
    <li>
      <ProfileIcon userId={follower.following.id} />
      <div>
        <div>{follower.following.nickname}</div>
        <div>
          {follower.following.introduce
            ? follower.following.introduce
            : 'No Introduce'}
        </div>
      </div>
    </li>
  );
};

export default FollowerCard;
