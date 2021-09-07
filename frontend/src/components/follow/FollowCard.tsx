import React, { FC } from 'react';
import ProfileIcon from '../common/ProfileIcon';

const FollowCard = () => {
  return (
    <div className="w-80">
      <div className="flex">
        <ProfileIcon userId={1} />
        <div className="flex items-center justify-between w-full">
          <div>
            <div>nickname</div>
            <div>introduce</div>
          </div>
          <div>
            <button>View profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowCard;
