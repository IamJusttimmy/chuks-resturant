import { Link, useLocation } from 'react-router-dom';
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Helper to return the right className based on active route
  const linkClass = (path) =>
    pathname === path
      ? "text-[#FF7A18] font-semibold"
      : "text-gray-600 hover:text-[#FF7A18] transition-colors";

  return (
    <>
      <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-white sticky top-0 z-50 shadow-sm">

        {/* Logo */}
        <Link to="/"
          style={{ fontFamily: "'Island Moments', cursive", lineHeight: '40.81px', color: '#FF7A18' }}
          className="text-2xl"
        >
          Chuks Kitchen
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className={linkClass("/")} style={{ fontSize: '16px', fontFamily: 'Inter' }}>Home</Link>
          <Link to="/explore" className={linkClass("/explore")} style={{ fontSize: '16px', fontFamily: 'Inter' }}>Explore</Link>
          <Link to="/orders" className={linkClass("/orders")} style={{ fontSize: '16px', fontFamily: 'Inter' }}>My Orders</Link>
          <Link to="/account" className={linkClass("/account")} style={{ fontSize: '16px', fontFamily: 'Inter' }}>Account</Link>
        </div>

        {/* Desktop Login Button - WRAPPED IN LINK */}
        <Link to="/login" className="hidden md:block">
          <button
            style={{ backgroundColor: '#FF7A18', fontFamily: 'Inter', fontWeight: '600', fontSize: '16px' }}
            className="text-white px-8 py-2 rounded-lg transition-transform hover:scale-105"
          >
            Login
          </button>
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-[#000] transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#000] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#000] transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col space-y-4 sticky top-[73px] z-40">
          <Link to="/" className={linkClass("/")} style={{ fontFamily: 'Inter' }} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/explore" className={linkClass("/explore")} style={{ fontFamily: 'Inter' }} onClick={() => setMenuOpen(false)}>Explore</Link>
          <Link to="/orders" className={linkClass("/orders")} style={{ fontFamily: 'Inter' }} onClick={() => setMenuOpen(false)}>My Orders</Link>
          <Link to="/account" className={linkClass("/account")} style={{ fontFamily: 'Inter' }} onClick={() => setMenuOpen(false)}>Account</Link>
          
          {/* Mobile Login Button - WRAPPED IN LINK */}
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            <button
              style={{ backgroundColor: '#FF7A18', fontFamily: 'Inter', fontWeight: '600' }}
              className="text-white px-6 py-2 rounded-lg w-full"
            >
              Login
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;