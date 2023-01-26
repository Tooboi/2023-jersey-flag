import React from 'react';
import logo from '../assets/flag-half.png';

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar">
      <div className="container justify-content-space-between">
        <a href="#about">
          <img src={logo} alt="NJ" className='nav-Icon'/>
        </a>
        <div className="container justify-content-end mt-1">
          <a href="#about" onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
            <h3 className="mb-0 px-1">About</h3>
          </a>
          <a href="#home" onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
            <h3 className="mb-0 px-1">Home</h3>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
