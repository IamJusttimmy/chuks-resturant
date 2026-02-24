import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-white sticky top-0 z-50 shadow-sm">

        {/* Logo */}
        <div className="text-2xl"
          style={{
            fontFamily: "'Island Moments', cursive",
            // fontWeight: '400',
            // fontSize: '40.81px',
            lineHeight: '40.81px',
            color: '#FF7A18'
          }}
        >
          Chuks Kitchen
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-[#FF7A18] font-semibold" style={{ fontSize: '16px', fontFamily: 'Inter' }}>Home</a>
          <a href="#" className="text-gray-600 hover:text-[#FF7A18] transition-colors" style={{ fontSize: '16px', fontFamily: 'Inter' }}>Explore</a>
          <a href="#" className="text-gray-600 hover:text-[#FF7A18] transition-colors" style={{ fontSize: '16px', fontFamily: 'Inter' }}>My Orders</a>
          <a href="#" className="text-gray-600 hover:text-[#FF7A18] transition-colors" style={{ fontSize: '16px', fontFamily: 'Inter' }}>Account</a>
        </div>

        {/* Desktop Login Button */}
        <button
          style={{
            backgroundColor: '#FF7A18',
            fontFamily: 'Inter',
            fontWeight: '600',
            fontSize: '16px'
          }}
          className="hidden md:block text-white px-8 py-2 rounded-lg transition-transform hover:scale-105"
        >
          Login
        </button>

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
          <a href="#" className="text-[#FF7A18] font-semibold" style={{ fontFamily: 'Inter' }}>Home</a>
          <a href="#" className="text-gray-600 hover:text-[#FF7A18]" style={{ fontFamily: 'Inter' }}>Explore</a>
          <a href="#" className="text-gray-600 hover:text-[#FF7A18]" style={{ fontFamily: 'Inter' }}>My Orders</a>
          <a href="#" className="text-gray-600 hover:text-[#FF7A18]" style={{ fontFamily: 'Inter' }}>Account</a>
          <button
            style={{ backgroundColor: '#FF7A18', fontFamily: 'Inter', fontWeight: '600' }}
            className="text-white px-6 py-2 rounded-lg w-full"
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;