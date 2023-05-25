import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = ({ isActive }) => ({ color: isActive ? '#2B061E' : '#875053' });

const PageWrapper = () => {
  return (
    <>
      <header>
        <nav class="Nav">
          <NavLink to="/" style={styles} exact>
            Home
          </NavLink>
          <NavLink to="/snacks" style={styles}>
            All snacks
          </NavLink>
          <NavLink to="/best" style={styles}>
            Best snack ever
          </NavLink>
          <NavLink to="/add" style={styles}>
            Add your favorite snack
          </NavLink>
        </nav>
      </header>
      <footer>POKEMON</footer>
    </>
    
  );
};

export default PageWrapper;
