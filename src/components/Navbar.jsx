const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-white sticky top-0 z-50 shadow-sm">

      <div 
        style={{ 
          fontFamily: "'Island Moments', cursive",
          fontWeight: '400',
          fontSize: '40.81px',
          lineHeight: '40.81px',
          color: '#FF7A18' 
        }}
      >
        Chuks Kitchen
      </div>

      <div className="hidden md:flex space-x-8 items-center">
        <a href="#" className="text-[#FF7A18] font-semibold" style={{ fontSize: '16px', fontFamily: 'Inter' }}>Home</a>
        <a href="#" className="text-gray-600 hover:text-[#FF7A18] transition-colors" style={{ fontSize: '16px', fontFamily: 'Inter' }}>Explore</a>
        <a href="#" className="text-gray-600 hover:text-[#FF7A18] transition-colors" style={{ fontSize: '16px', fontFamily: 'Inter' }}>My Orders</a>
        <a href="#" className="text-gray-600 hover:text-[#FF7A18] transition-colors" style={{ fontSize: '16px', fontFamily: 'Inter' }}>Account</a>
      </div>

      {/* Login Button */}
      <button 
        style={{ 
          backgroundColor: '#FF7A18',
          fontFamily: 'Inter',
          fontWeight: '600',
          fontSize: '16px'
        }}
        className="text-white font-semibold px-8 py-2 rounded-lg transition-transform hover:scale-105"
      >
        Login
      </button>
    </nav>
  );
};

export default Navbar;