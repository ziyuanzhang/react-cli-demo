import React from 'react';
import './Header.css';

const Header = props => {
  let content = 'hello';
  return (
    <header>
      <h1>Header</h1>
      {content}
    </header>
  );
};
export default Header;
