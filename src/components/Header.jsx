import React from 'react';
import { BiSearch, BiListUl, BiCog } from 'react-icons/bi';
import { AiOutlineAppstore, AiOutlineUser } from 'react-icons/ai';

function Header({ onClick }) {
  return (
    <header className="header">
      <button className="main-menu-button" onClick={onClick}>
        <svg focusable="false" viewBox="0 0 24 24">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
      </button>
      <img
        className="logo"
        src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
        alt="logo"
      />
      <h3 className="keep-text">Keep</h3>
      <div className="header-icons">
        <BiSearch className="header-icon" />
        <BiListUl className="header-icon" />
        <BiCog className="header-icon" />
        <AiOutlineAppstore className="header-icon" />
        <AiOutlineUser className="header-icon" />
      </div>
    </header>
  );
}

export default Header;

