import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';

const Login = () => {
  const logoStyle = { fontFamily: "'Island Moments', cursive", fontSize: '32px', color: '#FF7A18' };

  return (
    <AuthLayout title="Login your Account" logoStyle={logoStyle}>
      <form className="space-y-4 text-left">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email or phone number</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">✉</span>
            <input type="text" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A18] outline-none" placeholder="name@gmail.com" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">🔒</span>
            <input type="password" className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A18] outline-none" placeholder="******" />
            <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-400">👁</span>
          </div>
          <div className="text-right mt-1">
            <Link to="#" className="text-xs text-blue-500">Forgot Password?</Link>
          </div>
        </div>
        <button className="w-full bg-[#FF7A18] text-white py-3 rounded-lg font-bold mt-4 hover:bg-[#e66d16] transition-colors">Continue</button>
        
        <div className="relative flex py-4 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-sm">Or continue with</span>
            <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center gap-2 mb-2 hover:bg-gray-50">
            <img src="https://www.svgrepo.com/show/355037/google.svg" className="h-5" alt="google" /> Continue with Google
        </button>
        <button className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50">
            <span className="text-xl"></span> Continue with Apple
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account? <Link to="/signup" className="text-blue-500 font-semibold">Create an account</Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;