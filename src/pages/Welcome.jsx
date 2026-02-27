import React from 'react';
import { Link } from 'react-router-dom';
import welcomeImg from '../assets/auth-bg.png'; 

const Welcome = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Side: Full Image */}
      <div className="lg:w-1/2 h-64 lg:h-auto">
        <img src={welcomeImg} alt="Family Dining" className="w-full h-full object-cover" />
      </div>

      {/* Right Side: Content */}
      <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white">
        <div className="flex justify-between items-center mb-12">
          <h2 style={{ fontFamily: "'Island Moments', cursive", color: '#FF7A18' }} className="text-3xl">Chuks Kitchen</h2>
          <Link to="/login" className="border border-[#FF7A18] text-[#FF7A18] px-6 py-2 rounded-lg font-semibold">Sign In</Link>
        </div>

        <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Inter' }}>Your Authentic Taste of Nigeria</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Experience homemade flavors delivered fresh to your desk or home. We bring the rich culinary heritage of Nigeria right to your doorstep.
        </p>

        {/* Feature Icons */}
        <div className="flex flex-wrap gap-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="bg-[#FFF2E9] p-2 rounded-lg"><img src="fork-knife.png" alt="freshly prepared" /></span>
            <span className="font-semibold text-gray-700">Freshly Prepared</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-[#FFF2E9] p-2 rounded-lg"><img src="fork-knife.png" alt="freshly prepared" /></span>
            <span className="font-semibold text-gray-700">Support Local Business</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-[#FFF2E9] p-2 rounded-lg"><img src="car.png" alt="delivery" /></span>
            <span className="font-semibold text-gray-700">Fast & Reliable Delivery</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4">
          <Link to="/home" className="bg-[#FF7A18] text-white py-4 rounded-xl font-bold text-center shadow-lg hover:opacity-90">
            Start Your Order
          </Link>
          <Link to="/explore" className="border border-gray-200 py-4 rounded-xl font-bold text-center text-gray-700 hover:bg-gray-50">
            Learn More About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;