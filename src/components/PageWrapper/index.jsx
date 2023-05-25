import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const styles = ({ isActive }) => ({ color: isActive ? '#2B061E' : '#875053' });

const PageWrapper = () => {
  return (
    <main>
      <header>
        <nav class="Nav">
          <NavLink to="/" style={styles} exact>Home</NavLink>
          <NavLink to="/pokemon" style={styles}>All Pokemons</NavLink>
          <NavLink to="/game" style={styles}>Game</NavLink>
        </nav>
      </header>
      <Outlet />
      <footer>POKEMON</footer>
    </main>
    
  );
};

export default PageWrapper;
