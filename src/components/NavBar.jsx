import React from 'react'
import './NavBar.css'

function NavBar() {
    return (
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">Top Gear</li>
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Cars</li>
            <li className="nav-item">Contact</li>
          </ul>
        </nav>
      );
}

export default NavBar