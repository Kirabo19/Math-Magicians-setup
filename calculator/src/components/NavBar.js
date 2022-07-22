import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header className="flex header">
    <h1>Math Magicians</h1>
    <nav className="navBar">
      <ul className="flex nav_links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Calculator">Calculator</NavLink></li>
        <li><NavLink to="/Quote">Quote</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
