import React from 'react';
import { CgProfile } from 'react-icons/cg';
import Navbar from './Navbar';

function Header() {
  return (
    <header>
      <h1>Bookstore CMS</h1>
      <Navbar />
      <div className="profile">
        <CgProfile />
      </div>
    </header>
  );
}

export default Header;
