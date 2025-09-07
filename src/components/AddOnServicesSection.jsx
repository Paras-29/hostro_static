const services = [
  {
    icon: (
      <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="14" rx="2"/><rect x="7" y="3" width="10" height="4" rx="1"/></svg>
    ),
    title: "Laundry",
    desc: "Per-kg and subscription plans with doorstep pickup."
  },
  {
    icon: (
      <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
    ),
    title: "Tiffin / Mess",
    desc: "Veg & non-veg weekly menus delivered fresh."
  },
  {
    icon: (
      <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
    ),
    title: "Support",
    desc: "24×7 ticketing with SLAs and escalation matrix."
  }
];

const AddOnServicesSection = () => (
  <section className="max-w-7xl mx-auto px-4 py-12">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">Add-on services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((s, idx) => (
        <div key={idx} className="bg-white rounded-2xl border p-6 flex flex-col items-start shadow">
          <div className="bg-green-100 rounded-full p-2 mb-3">{s.icon}</div>
          <div className="font-bold text-lg mb-1 text-gray-800">{s.title}</div>
          <div className="text-gray-600 text-sm">{s.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default AddOnServicesSection;
