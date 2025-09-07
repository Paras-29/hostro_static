const ComingSoon = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100">
    <div className="bg-white rounded-3xl shadow-2xl px-8 py-16 flex flex-col items-center max-w-xl">
      <h2 className="text-4xl md:text-6xl font-extrabold text-green-700 mb-6 animate-pulse">COMING SOON.....</h2>
      <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-6 text-center">Luxuriousness is not standard; it's a thing to live and feel.<br /><span className="block mt-2 text-green-600 font-bold">So we are</span></p>
      <div className="mt-8 flex flex-col items-center">
        <svg className="w-24 h-24 text-green-400 mb-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
        <span className="text-lg text-gray-500 italic">Stay tuned for something extraordinary!</span>
      </div>
    </div>
  </div>
);

export default ComingSoon;
