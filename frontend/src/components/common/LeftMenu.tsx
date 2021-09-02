import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faBell as farBell,
  faEnvelope as farEnvelope,
  faUser as farUser,
} from '@fortawesome/free-regular-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import MenuButton from './MenuButton';

const menuConfig = [
  { id: 1, title: 'Home', icon: faHome, link: '/' },
  { id: 2, title: 'Notifications', icon: farBell, link: '/notifications' },
  { id: 3, title: 'Message', icon: farEnvelope, link: '/messages' },
  { id: 4, title: 'Profile', icon: farUser, link: '/profile' },
];

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
        <nav>
          {menuConfig.map((menu) => {
            return (
              <MenuButton
                key={menu.id}
                title={menu.title}
                icon={menu.icon}
                link={menu.link}
              />
            );
          })}
        </nav>
        <button className="bg-green-500 hover:bg-green-600 text-white font-black text-lg px-24 py-4 rounded-full mt-8">
          Tweet
        </button>
      </div>
    </div>
  );
};

export default LeftMenu;
