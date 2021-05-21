import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ type }) => {
  console.log(type)
  return (
    <header className='header'>
      <Link to='/'>
        <h1 className='app-name'>rancid tomatillos</h1>
      </Link>
        {type === 'main' && 
        <h2 className='page-title'>Popular Movies this Month</h2>}
        {type !== 'main' &&
        <h2 className='page-title'>Search results for "{type.searchInput}"</h2>}
    </header>
  )
}

export default Header
