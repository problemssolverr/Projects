import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Text */}
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <NavLink to='/'>
            <img
            src={assets.logo} // Replace with your actual logo path
            alt="417 Pest Solutions"
            className="w-10 h-10"
          />
          </NavLink>
          <span className="text-xl font-semibold text-green-500">ASO God's Grace Nig. Ent.</span>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com/share/1CH7ARbZCP/" // Replace with your actual Facebook URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-400"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/in/akinsanya-o-w-a-k-a-god-sgrace-648842151?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" // Replace with your actual LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-400"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/pestcontrol52godsgrace?igsh=c3FhYjI3aDl4NHJk" // Replace with your actual LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-400"
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto mt-4  items-center justify-center text-sm text-white/80">
        <p className="mb-2 md:mb-0 text-center">
          &copy; {new Date().getFullYear()} ASO God's Grace Pest Solutions. All Rights Reserved.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
