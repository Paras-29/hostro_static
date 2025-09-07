import './Footer.css';

const Footer = () => (
  <footer className="bg-white border-t mt-16">
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
      {/* Brand & Social */}
      <div className="md:col-span-1">
        <div className="text-2xl font-bold text-green-700 mb-2">Hostro</div>
        <div className="text-gray-600 mb-4 text-sm">Ventures Private Limited</div>
        <div className="flex space-x-4 mb-4">
          <a href="https://x.com/hostroventures" aria-label="Twitter/X" target="_blank" rel="noopener noreferrer"><svg className="w-5 h-5 text-gray-500 hover:text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4l16 16M20 4L4 20" /></svg></a>
          <a href="https://www.instagram.com/hostro.in?igsh=eHQ3cnU0emppMTE2" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><svg className="w-5 h-5 text-gray-500 hover:text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /></svg></a>
          <a href="https://www.linkedin.com/company/hostro-ventures-private-limited/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><svg className="w-5 h-5 text-gray-500 hover:text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M8 11v5M12 11v5M16 11v5" /></svg></a>
          <a href="https://youtube.com/@hostro.i?feature=shared" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><svg className="w-5 h-5 text-gray-500 hover:text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="3" /><polygon points="10,9 16,12 10,15" /></svg></a>
        </div>
      </div>
      {/* Useful Links */}
      <div>
        <div className="font-semibold mb-3">Useful Links</div>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><a href="/coming-soon" className="hover:text-green-700">Home</a></li>
          <li><a href="/coming-soon" className="hover:text-green-700">Connect+</a></li>
          <li><a href="/coming-soon" className="hover:text-green-700">Vendors</a></li>
          <li><a href="/coming-soon" className="hover:text-green-700">Admin</a></li>
          <li><a href="/coming-soon" className="hover:text-green-700">Superadmin</a></li>
          <li><a href="/coming-soon" className="hover:text-green-700">Owner</a></li>
          <li><a href="/coming-soon" className="hover:text-green-700">Student</a></li>
            <li><a href="/team" className="text-gray-700 hover:text-green-700 block mb-2">Team</a></li>
        </ul>
      </div>
      {/* Company */}
      <div>
        <div className="font-semibold mb-3">Company</div>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><a href="/coming-soon" className="hover:text-green-700">About</a></li>
          <li><a href="/coming-soon" className="hover:text-green-700">Contact</a></li>
          <li><a href="/coming-soon" className="hover:text-green-700">Blog</a></li>
          <li><a href="/coming-soon" className="hover:text-green-700">Careers</a></li>
          <li><a href="/team" className="hover:text-green-700">Team</a></li>
          <li><a href="/coming-soon" className="hover:text-green-700">Faqs</a></li>
        </ul>
      </div>
      {/* Resources */}
      <div>
        <div className="font-semibold mb-3">Resources</div>
        <ul className="space-y-2 text-gray-700 text-sm mb-4">
          <li><a href="/coming-soon" className="hover:text-green-700">Developers</a></li>
          <li><a href="/coming-soon" className="hover:text-green-700">Sparks</a></li>
          <li><a href="/coming-soon" className="hover:text-green-700">Status</a></li>
          <li><a href="/coming-soon" className="hover:text-green-700">Support</a></li>
        </ul>
        <form className="flex">
          <input type="email" placeholder="Email address" className="flex-1 px-3 py-2 rounded-l border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-700 bg-white" />
          <button type="submit" className="px-4 py-2 rounded-r bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition">Subscribe</button>
        </form>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 pb-4 flex flex-col md:flex-row justify-between items-center border-t pt-4 text-xs text-gray-500">
      <div>&copy; {new Date().getFullYear()} Hostro Ventures Private Limited. All rights reserved.</div>
      <div className="flex gap-4 mt-2 md:mt-0">
  <a href="/coming-soon" className="hover:text-green-700">Privacy</a>
  <a href="/coming-soon" className="hover:text-green-700">Terms</a>
  <a href="/coming-soon" className="hover:text-green-700">Cookies</a>
      </div>
    </div>
  </footer>
);

export default Footer;
