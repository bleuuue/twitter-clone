import React, { FC } from 'react';
import ProfileIcon from '../common/ProfileIcon';
import { Link } from 'react-router-dom';

interface FollowCardProps {
  userId: number;
  nickname: string;
  introduce: string;
}

const FollowCard: FC<FollowCardProps> = ({ userId, nickname, introduce }) => {
  return (
    <div className="w-80">
      <div className="flex px-4 py-2 hover:bg-gray-300">
        <ProfileIcon userId={userId} />
        <div className="flex items-center justify-between w-full ml-2">
          <div>
            <div>{nickname}</div>
            <div>{introduce ? introduce : 'No Introduce'}</div>
          </div>
          <Link to={`/profile/${userId}`}>
            <button className="rounded-full px-4 py-2 font-black text-white bg-black text-sm">
              View profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FollowCard;
