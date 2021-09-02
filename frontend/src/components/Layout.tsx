import React, { FC, useContext, useEffect } from 'react';
import { MeContext } from '../contexts';
import LeftMenu from './common/LeftMenu';
import Login from './login/Login';

const Layout: FC = ({ children }) => {
  const { me } = useContext(MeContext);

  useEffect(() => console.log(me), []);

  if (!me) return <Login />;

  return (
    <div className="flex min-h-screen front-noto">
      <LeftMenu />
      <div className="max-w-screen-sm flex-auto border-r-1 border-l-1">
        {children}
      </div>
      <div className="flex-auto">3</div>
    </div>
  );
};

export default Layout;
