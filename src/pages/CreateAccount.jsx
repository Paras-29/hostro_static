import { useState } from "react";

const CreateAccount = () => {
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
        {/* Right: Create Account Form */}
        <form className="bg-white rounded-2xl shadow p-8 flex flex-col gap-4">
          <h2 className="text-xl font-semibold mb-2">Create account</h2>
          <p className="text-gray-600 mb-2">Join Hostro to book PGs, pay rent, and more.</p>
          <input type="text" placeholder="Your name" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-700 bg-white" />
          <input type="email" placeholder="you@example.com" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-700 bg-white" />
          <input type="text" placeholder="9876543210" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-700 bg-white" />
          <div className="grid grid-cols-2 gap-4">
            <input type={showPassword ? "text" : "password"} placeholder="Password" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-700 bg-white" />
            <input type={showPassword ? "text" : "password"} placeholder="Confirm password" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-700 bg-white" />
          </div>
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" id="showPassword" onChange={() => setShowPassword(s => !s)} />
            <label htmlFor="showPassword">Show password</label>
          </div>
          <select className="px-4 py-2 rounded border border-gray-300 text-gray-700 bg-white">
            <option value="Student">Student</option>
            <option value="Owner">Owner</option>
            <option value="Admin">Admin</option>
            <option value="Superadmin">Superadmin</option>
          </select>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Address line 1 (optional)" className="px-4 py-2 rounded border border-gray-300 text-gray-700 bg-white" />
            <input type="text" placeholder="Address line 2 (optional)" className="px-4 py-2 rounded border border-gray-300 text-gray-700 bg-white" />
            <input type="text" placeholder="City" className="px-4 py-2 rounded border border-gray-300 text-gray-700 bg-white" />
            <input type="text" placeholder="State" className="px-4 py-2 rounded border border-gray-300 text-gray-700 bg-white" />
            <input type="text" placeholder="Pincode" className="px-4 py-2 rounded border border-gray-300 text-gray-700 bg-white" />
          </div>
          <button type="submit" className="px-6 py-2 rounded bg-green-400 text-white font-semibold shadow hover:bg-green-500 transition">Create account</button>
          <div className="text-sm mt-2 text-center">
            Already have an account? <a href="/login" className="text-green-700 hover:underline">Sign in</a>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateAccount;
