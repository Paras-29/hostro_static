import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="pt-24 bg-gradient-to-b from-green-50 to-white min-h-screen">
      <section className="max-w-4xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Welcome */}
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2 text-gray-700">Welcome to <span className="text-green-600">Hostro</span></h2>
          <p className="text-gray-600 mb-4">Verified PGs, instant booking, secure payments & dependable support.</p>
          <ul className="text-gray-700 text-sm space-y-1 mb-2">
            <li>&bull; Instant booking & digital agreements</li>
            <li>&bull; Transparent rent & invoices</li>
            <li>&bull; 24×7 support with ticketing</li>
          </ul>
        </div>
        {/* Right: Login Form */}
        <form className="bg-white rounded-2xl shadow p-8 flex flex-col gap-4">
          <h2 className="text-xl font-semibold mb-2">Sign in</h2>
          <p className="text-gray-600 mb-2">Welcome back!</p>
          <input type="email" placeholder="you@example.com" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-700 bg-white" />
          <div className="relative">
            <input type={showPassword ? "text" : "password"} placeholder="Password" className="px-4 py-2 rounded border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-700 bg-white" />
            <button type="button" className="absolute right-2 top-2 text-gray-400" onClick={() => setShowPassword(s => !s)}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z"/></svg>
            </button>
          </div>
          <button type="submit" className="px-6 py-2 rounded bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition">Sign in</button>
          <div className="flex justify-between text-sm mt-2">
            <a href="#" className="text-green-700 hover:underline">Forgot password?</a>
            <a href="/create-account" className="text-green-700 hover:underline">New here? Create account</a>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
