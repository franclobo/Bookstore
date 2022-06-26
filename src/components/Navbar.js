import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <nav className="navBar">
      {links.map((link) => (
        <NavLink key={link.id} className="link" to={link.path}>
          {link.text}
        </NavLink>
      ))}
    </nav>
  );
}
export default Navbar;
