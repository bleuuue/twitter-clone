import React, { FC, useContext } from 'react';
import { MeContext } from '../../contexts';
import FollowMenu from '../follow/FollowMenu';
import Login from '../login/Login';
import LeftMenu from './LeftMenu';

const Layout: FC = ({ children }) => {
  const { me } = useContext(MeContext);

  if (!me) return <Login />;

  return (
    <div className="flex min-h-screen front-noto">
      <div className="hidden md:block">
        <LeftMenu />
      </div>
      <div className="max-w-screen-sm flex-auto border-r-1 border-l-1">
        {children}
      </div>
      <div className="hidden md:block">
        <FollowMenu />
      </div>
    </div>
  );
};

export default Layout;
