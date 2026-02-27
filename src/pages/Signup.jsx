import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';

const Signup = () => {
  const logoStyle = { fontFamily: "'Island Moments', cursive", fontSize: '32px', color: '#FF7A18' };

  return (
    <AuthLayout title="Create Your Account" logoStyle={logoStyle}>
      <form className="space-y-4 text-left">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">✉</span>
            <input type="email" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg outline-none" placeholder="name@gmail.com" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">📞</span>
            <input type="text" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg outline-none" placeholder="8123340690" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">🔒</span>
            <input type="password" className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg outline-none" placeholder="QWE123#" />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">👁</span>
          </div>
        </div>
        <div className="flex items-start gap-2 py-2">
            <input type="checkbox" className="mt-1" id="terms" />
            <label htmlFor="terms" className="text-xs text-gray-500">
                I agree to the <span className="text-blue-500">Terms & Conditions</span> and <span className="text-blue-500">Privacy Policy</span>
            </label>
        </div>
        <button className="w-full bg-[#FF7A18] text-white py-3 rounded-lg font-bold hover:bg-[#e66d16] transition-colors">Continue</button>
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account? <Link to="/login" className="text-blue-500 font-semibold">Sign In</Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Signup;