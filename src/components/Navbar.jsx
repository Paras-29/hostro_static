
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-green-100 shadow w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex-shrink-0 text-2xl font-bold text-green-700">Hostro</div>
        <div className="flex items-center">
          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-7 h-7 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6 ml-8">
            <li><Link to="/" className="text-gray-700 hover:text-green-700 font-medium">Home</Link></li>
            <li><Link to="/how-it-works" className="text-gray-700 hover:text-green-700 font-medium">How It Works</Link></li>
            <li><Link to="/faqs" className="text-gray-700 hover:text-green-700 font-medium">FAQs</Link></li>
            <li><Link to="/contact" className="text-gray-700 hover:text-green-700 font-medium">Contact</Link></li>
            <li><Link to="/team" className="text-gray-700 hover:text-green-700 font-medium">Team</Link></li>
          </ul>
          <Link to="/login" className="hidden md:inline-block ml-4 px-4 py-2 rounded bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition">Login</Link>
        </div>
      </div>
      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-green-100 shadow-lg">
          <ul className="flex flex-col items-center py-4 space-y-2">
            <li><Link to="/" className="text-gray-700 hover:text-green-700 font-medium w-full block px-4 py-2" onClick={()=>setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/how-it-works" className="text-gray-700 hover:text-green-700 font-medium w-full block px-4 py-2" onClick={()=>setMenuOpen(false)}>How It Works</Link></li>
            <li><Link to="/faqs" className="text-gray-700 hover:text-green-700 font-medium w-full block px-4 py-2" onClick={()=>setMenuOpen(false)}>FAQs</Link></li>
            <li><Link to="/contact" className="text-gray-700 hover:text-green-700 font-medium w-full block px-4 py-2" onClick={()=>setMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/team" className="text-gray-700 hover:text-green-700 font-medium w-full block px-4 py-2" onClick={()=>setMenuOpen(false)}>Team</Link></li>
            <li><Link to="/login" className="w-full block px-4 py-2 rounded bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition mt-2" onClick={()=>setMenuOpen(false)}>Login</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
