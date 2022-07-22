import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header>
    <div>Math Magicians</div>
    <nav>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Calculator">Calculator</NavLink>
        <NavLink to="/Quote">Quote</NavLink>
      </ul>
    </nav>
  </header>
);

export default NavBar;
