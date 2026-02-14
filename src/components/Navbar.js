import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CONTACT } from '../constants';
import logo from '../logo abacus.png';


const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/courses', label: 'Courses' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/achievements', label: 'Achievements' },
  { path: '/contact', label: 'Contact' },
  { path: '/feedback', label: 'Feedback' },
];

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top border-bottom border-gold">
      <div className="container">
        <Link className="navbar-brand" to="/">
        <img src={logo} alt="Samvit Academy" height="80" />
        </Link>
 

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-2">
            {navItems.map((item) => (
              <li className="nav-item" key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link fw-semibold ${isActive ? 'active text-gold' : ''}`
                  }
                  end={item.path === '/'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
