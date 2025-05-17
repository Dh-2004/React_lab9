import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import './index.css'; // We'll style everything here

function App() {
  const linkStyle = ({ isActive }) => ({
    margin: '0 15px',
    padding: '8px 14px',
    textDecoration: 'none',
    borderRadius: '12px',
    backgroundColor: isActive ? '#ffd1dc' : 'transparent',
    color: isActive ? '#fff' : '#ff6f91',
    fontWeight: isActive ? 'bold' : '500',
    transition: 'all 0.3s ease',
    boxShadow: isActive ? '0 4px 12px rgba(255, 105, 135, 0.2)' : 'none',
  });

  return (
    <div className="comfort-container">
      <nav className="comfort-navbar">
        <NavLink to="/" style={linkStyle} end>Home</NavLink>
        <NavLink to="/about" style={linkStyle}>About</NavLink>
        <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
