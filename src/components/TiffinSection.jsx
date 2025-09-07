const TiffinSection = () => (
  <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Left: Images */}
    <div className="grid grid-cols-2 gap-4">
      <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Tiffin Food" className="rounded-2xl object-cover w-full h-32 md:h-40 shadow" />
      <img src="https://images.unsplash.com/photo-1464306076886-debede5e2f32?auto=format&fit=crop&w=400&q=80" alt="Salad" className="rounded-2xl object-cover w-full h-32 md:h-40 shadow" />
      <img src="https://images.unsplash.com/photo-1505250461400-41d8fa3dfb37?auto=format&fit=crop&w=400&q=80" alt="Pancakes" className="rounded-2xl object-cover w-full h-32 md:h-40 shadow col-span-2" />
    </div>
    {/* Right: Text */}
    <div>
      <div className="text-green-700 font-medium mb-2">Daily Meals</div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Tiffin / Mess</h2>
      <p className="text-gray-600 mb-4">Fresh home-style food delivered to your PG. Choose veg/non-veg, customize spice levels, and pause anytime during exams or travel.</p>
      <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-gray-700 text-sm mb-6">
        <li>&bull; Balanced weekly menus</li>
        <li>&bull; Lunch & dinner plans</li>
        <li>&bull; Veg / Non-veg options</li>
        <li>&bull; Pause / resume anytime</li>
      </ul>
      <div className="flex gap-4">
        <button className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition">Browse menus</button>
        <button className="px-6 py-3 rounded-lg border border-gray-300 text-gray-800 font-semibold shadow hover:bg-green-50 transition">Partner with us</button>
      </div>
    </div>
  </section>
);

export default TiffinSection;
