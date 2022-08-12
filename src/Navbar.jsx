import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    color: 'pink'
  }
  return (
    <div className="App">
      <navbar>
          <h3>Curriculum Vitae</h3>
          <ul className='navbar-links'>
          <Link style={navStyle} to="/home">
              <li>Home</li>
              </Link>
              <Link to="/about" style={navStyle}>
              <li>About</li>
              </Link>
          </ul>
      </navbar>
    </div>
  );
}

export default Navbar;
