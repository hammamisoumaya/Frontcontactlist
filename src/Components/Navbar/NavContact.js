import React from 'react';
import './NavContact.css';
import {Link} from 'react-router-dom'

function NavContact() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link">
          <Link to={'/'}  >Home</Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
          <Link to={'/list'}>ListContact</Link>
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">
          <Link to={'/add'}>Add Contact</Link>
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">
          <Link to={'/add'}>About</Link>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavContact;