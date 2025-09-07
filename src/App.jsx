import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ComingSoon from './pages/ComingSoon';
import Contact from './pages/Contact';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import HowItWorks from './pages/HowItWorks';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<ComingSoon />} />
          <Route path="/services" element={<ComingSoon />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<ComingSoon />} />
          {/* Catch hash routes */}
          <Route path="#*" element={<ComingSoon />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
