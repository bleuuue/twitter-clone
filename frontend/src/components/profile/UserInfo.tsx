import React, { FC } from 'react';
import ProfileIcon from '../ProfileIcon';

const UserInfo: FC = () => {
  return (
    <div className="flex border-b-1">
      <div>
        <ProfileIcon />
        <div>nickname</div>
      </div>
      <div className="flex justify-around w-full text-center">
        <div>
          <div>Followers</div>
          <div>123</div>
        </div>
        <div>
          <div>Followings</div>
          <div>123</div>
        </div>
        <div>
          <div>Tweets</div>
          <div>123</div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
