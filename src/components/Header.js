import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../static/images/logo.png';

const HeaderLink = ({ children, to }) => (
  <NavLink
    exact
    to={to}
    activeClassName="bg-gray"
    className="rounded p1 black text-decoration-none"
  >
    {children}
  </NavLink>
);

HeaderLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Header = () => (
  <header className="flex items-center justify-between px4">
    <div>
      <h1 className="h1 inline-block mr2">🍽My Recipes</h1>
      <span className="mr1">by</span>
      <img alt="logo" src={Logo} style={{ width: 30 }} />
    </div>
    <nav>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/favorites">Favorites</HeaderLink>
    </nav>
  </header>
);

export default Header;
