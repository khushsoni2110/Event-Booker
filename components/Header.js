import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useAuth } from './AuthContext'; // adjust the path if needed

const Header = () => {
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="main-header">
      <div className="logo">🎟️ Event Booker</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {!isLoggedIn ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <button onClick={handleLogout} className="nav-button-link">
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
