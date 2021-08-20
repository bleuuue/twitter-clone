import React, { FC } from 'react';

const Layout: FC = ({ children }) => {
  return (
    <div className="flex bg-red-100 min-h-screen">
      <div className="bg-blue-100 flex-auto">1</div>
      <div className="bg-green-100 max-w-screen-sm flex-auto">{children}</div>
      <div className="bg-purple-100 flex-auto">3</div>
    </div>
  );
};

export default Layout;
