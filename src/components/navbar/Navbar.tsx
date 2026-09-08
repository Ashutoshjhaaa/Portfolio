import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LuSun, LuMoon } from 'react-icons/lu';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('portfolio-theme') as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleScrollTo = (id: string) => {
    if (location.pathname !== '/' && location.pathname !== '/home') {
      navigate(`/#${id}`);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-item ${isActive && !location.hash ? 'active' : ''}`
          }
          onClick={() => {
            if (location.pathname === '/' || location.pathname === '/home') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          Home
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          Projects
        </NavLink>

        <button
          type="button"
          className={`nav-item ${location.hash === '#skills' ? 'active' : ''}`}
          onClick={() => handleScrollTo('skills')}
        >
          Skills
        </button>

        <button
          type="button"
          className={`nav-item ${location.hash === '#contact' ? 'active' : ''}`}
          onClick={() => handleScrollTo('contact')}
        >
          Contact
        </button>
      </div>

      <div className="nav-actions">
        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <LuSun className="theme-icon sun" /> : <LuMoon className="theme-icon moon" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;



