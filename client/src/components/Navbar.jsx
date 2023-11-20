import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        Messenger App
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/chat">Chat</a></li>
        {/* Additional navigation links */}
      </ul>
    </nav>
  );
};

export default Navbar;
