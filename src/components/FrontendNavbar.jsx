import { useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Edukasi', to: '/edukasi' },
  { name: 'Rekrutmen', to: '/rekrutmen' },
  { name: 'Selling', to: '/selling' },
];

const FrontendNavbar = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="frontend-nav">
        <div className="nav-logo">HNI <span>{title}</span></div>
        <div className="nav-links desktop-nav">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="nav-back">
              {item.name === 'Home' ? 'Beranda' : item.name}
            </Link>
          ))}
        </div>
        <button
          type="button"
          className={`mobile-menu-button ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu} />
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div>Menu</div>
          <button type="button" className="mobile-menu-close" onClick={closeMenu} aria-label="Tutup menu">
            ×
          </button>
        </div>
        <div className="mobile-menu-content">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="mobile-menu-link" onClick={closeMenu}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default FrontendNavbar;
