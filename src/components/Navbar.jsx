import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="bg-green-100 shadow w-full fixed top-0 left-0 z-50">
    <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
      <div className="flex-shrink-0 text-2xl font-bold text-green-700">Hostro</div>
      <div className="flex items-center space-x-8">
        <ul className="flex space-x-6">
          <li><Link to="/" className="text-gray-700 hover:text-green-700 font-medium">Home</Link></li>
          <li><Link to="/how-it-works" className="text-gray-700 hover:text-green-700 font-medium">How It Works</Link></li>
          <li><Link to="/faqs" className="text-gray-700 hover:text-green-700 font-medium">FAQs</Link></li>
          <li><Link to="/contact" className="text-gray-700 hover:text-green-700 font-medium">Contact</Link></li>
            <li><Link to="/team" className="text-gray-700 hover:text-green-700 font-medium">Team</Link></li>
        </ul>
        <Link to="/login" className="ml-4 px-4 py-2 rounded bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition">Login</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
