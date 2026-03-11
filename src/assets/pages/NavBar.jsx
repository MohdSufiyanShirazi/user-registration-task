import React from 'react';
import { Link,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Registration from './Registration';
import AdminLogin from './AdminLogin';
import './style.css';

const NavBar = () => {
  return (
    <div>
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
              User Registration 
          </Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
         
          <li className="nav-item">
            <Link to="/registration" className="nav-link">
              Registration
            </Link>
          </li>
          <li className="nav-item nav-item-dropdown">
            <button className="nav-link dropdown-btn">
              Login ▼
            </button>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/admin-login" className="dropdown-link">
                  Admin Login
                </Link>
              </li>
              
            </ul>
          </li>
        </ul>
      </div>
    </nav>

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>


    </div>

  );
};

export default NavBar;
