import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useState } from 'react';
import HamburgerMenu from './HamburgerMenu';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  const [hamburgerToggle, setHamburgerToggle] = useState<boolean>(false);

  const onClickLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  const onClickHamburgerToggle = () => {
    setHamburgerToggle(true);
  };

  return (
    <>
      <div className="font-bold text-xl p-4 border-b-1 flex justify-between">
        <h1 className="hidden md:block">{title}</h1>
        <button className="md:hidden" onClick={onClickHamburgerToggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div>
          <button
            className="border-1 border-gray-299 text-gray-200 text-xs py-1 px-2 rounded-full hover:border-red-500 hover:text-red-500"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
      {hamburgerToggle && (
        <HamburgerMenu title={title} setHamburgerToggle={setHamburgerToggle} />
      )}
    </>
  );
};

export default Header;
