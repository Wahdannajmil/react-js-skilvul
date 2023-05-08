import React from 'react';
import '../App.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="/" className="logo">My Website</a>
        <ul className="nav-menu">
          <li className="nav-item"><a href="/first" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="/services" className="nav-link">Services</a></li>
          <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;