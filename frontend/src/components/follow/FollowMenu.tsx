import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import ProfileIcon from '../common/ProfileIcon';
import FollowCard from './FollowCard';

const FollowMenu: FC = () => {
  return (
    <div className="flex-auto">
      <div>
        <form className="relative">
          <FontAwesomeIcon className="absolute top-4 left-4" icon={faSearch} />
          <input className="border-1 border-white rounded-full px-12 py-3 focus:outline-none focus:border-green-500 bg-gray-100 focus:bg-white" />
        </form>
      </div>
      <FollowCard />
      <FollowCard />
      <FollowCard />
      <FollowCard />
      <FollowCard />
    </div>
  );
};

export default FollowMenu;
