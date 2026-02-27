import React from 'react';
import authBg from '../assets/auth-bg.png'; // Using your main hero image

const AuthLayout = ({ children, title, logoStyle }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        {/* Left Side: Orange-Tinted Image Overlay */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <img src={authBg} alt="Dining" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#FF7A18]/80 flex flex-col items-center justify-center p-12 text-white text-center">
            <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Inter' }}>Chuks Kitchen</h2>
            <p className="text-xl leading-relaxed max-w-md" style={{ fontFamily: 'Inter' }}>
              Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favorites today!
            </p>
          </div>
        </div>

        {/* Right Side: Form Area */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[#F9FAFB]">
          <div className="max-w-md w-full text-center">
            <div style={logoStyle} className="mb-2">Chuks Kitchen</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Inter' }}>{title}</h2>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;