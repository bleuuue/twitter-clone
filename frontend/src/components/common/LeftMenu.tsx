import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import MenuList from './MenuList';

const LeftMenu: FC = () => {
  return (
    <div className="flex-auto flex justify-end mr-8">
      <div>
        <div>
          <FontAwesomeIcon
            className="text-3xl text-green-500"
            icon={faTwitter}
          />
        </div>
        <MenuList />
        <button className="bg-green-500 hover:bg-green-600 text-white font-black text-lg px-24 py-4 rounded-full mt-8">
          Tweet
        </button>
      </div>
    </div>
  );
};

export default LeftMenu;
