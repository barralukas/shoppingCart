import React from 'react';

import './Header.css';

import SearchBar from '../SearchBar/SearchBar';
import CartButton from '../CartButton/CartButton';

function Header() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <SearchBar />
          <CartButton />
        </div>
      </header>
    </div>
  );
}

export default Header;
