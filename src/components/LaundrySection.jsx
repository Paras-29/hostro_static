const LaundrySection = () => (
  <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Left: Text */}
    <div>
      <div className="text-green-700 font-medium mb-2">Convenience</div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Laundry Services</h2>
      <p className="text-gray-600 mb-4">Schedule pickups, track status, and get neatly folded clothes delivered to your PG. Affordable weekly plans with express options.</p>
      <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-gray-700 text-sm mb-6">
        <li>&bull; Doorstep pickup & delivery</li>
        <li>&bull; Per-kg & subscription plans</li>
        <li>&bull; Express 24h turnaround</li>
        <li>&bull; Stain care & ironing</li>
      </ul>
      <div className="flex gap-4">
        <button className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition">View plans</button>
        <button className="px-6 py-3 rounded-lg border border-gray-300 text-gray-800 font-semibold shadow hover:bg-green-50 transition">Talk to us</button>
      </div>
    </div>
    {/* Right: Images */}
    <div className="grid grid-cols-2 gap-4">
      <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" alt="Laundry Folded" className="rounded-2xl object-cover w-full h-32 md:h-40 shadow" />
      <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Laundry Hanging" className="rounded-2xl object-cover w-full h-32 md:h-40 shadow" />
      <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80" alt="Laundry Basket" className="rounded-2xl object-cover w-full h-32 md:h-40 shadow col-span-2" />
    </div>
  </section>
);

export default LaundrySection;
