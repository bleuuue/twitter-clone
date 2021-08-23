import React, { FC } from 'react';

const Layout: FC = ({ children }) => {
  return (
    <div className="flex bg-red-100 min-h-screen front-noto">
      <div className="flex-auto">1</div>
      <div className="max-w-screen-sm flex-auto border-r-1 border-1-1">
        {children}
      </div>
      <div className="flex-auto">3</div>
    </div>
  );
};

export default Layout;
