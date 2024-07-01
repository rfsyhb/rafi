import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const linkClass = (path) =>
    location.pathname === path
      ? 'bg-text text-bekgron hover:bg-bekgron hover:text-text p-1 px-2 rounded-lg border-2 border-white'
      : 'hover:bg-text hover:text-bekgron p-1 px-2 rounded-lg border-2 border-transparent';

  return (
    <header className="bg-card1 shadow-sm text-text p-4 py-5 hover:shadow-lg">
      <div className="container mx-auto flex flex-wrap justify-between items-center md:px-10">
        <h1 className="text-3xl font-bold">ABC Food</h1>
        <nav className="flex flex-wrap gap-3 mt-4 md:mt-0">
          <Link className={linkClass('/')} to="/">
            Home
          </Link>
          <Link className={linkClass('/menu')} to="/menu">
            Menu
          </Link>
          <Link className={linkClass('/about')} to="/about">
            About
          </Link>
          <Link className={linkClass('/contact')} to="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
