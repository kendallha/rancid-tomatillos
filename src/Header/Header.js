import React from 'react';
import './Header.css';

const Header = ({ type }) => {
  console.log(type)
  return (
    <header className='header'>
      <h1 className='app-name'>rancid tomatillos</h1>
      {type === 'main' && 
      <h2 className='page-title'>Popular Movies this Month</h2>}
      {type !== 'main' &&
      <h2 className='page-title'>Search results for "{type.searchInput}"</h2>}
    </header>
  )
}

export default Header
