import React from 'react';
import {
  faBell as farBell,
  faEnvelope as farEnvelope,
  faUser as farUser,
} from '@fortawesome/free-regular-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import MenuButton from './MenuButton';

const menuConfig = [
  { id: 1, title: 'Home', icon: faHome, link: '/' },
  { id: 2, title: 'Notifications', icon: farBell, link: '/notifications' },
  { id: 3, title: 'Message', icon: farEnvelope, link: '/messages' },
  { id: 4, title: 'Profile', icon: farUser, link: '/profile' },
];

const MenuList = () => {
  return (
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
  );
};

export default MenuList;
