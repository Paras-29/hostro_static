const steps = [
  {
    number: "01",
    icon: (
      <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
    ),
    title: "Browse verified listings",
    items: [
      "Filters for budget, food, AC/Non-AC, sharing type",
      "Map & neighborhood view",
      "Owner & property verification badges"
    ],
    link: { text: "Explore listings", href: "#" }
  },
  {
    number: "02",
    icon: (
      <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="14" rx="2"/><rect x="7" y="3" width="10" height="4" rx="1"/></svg>
    ),
    title: "Instant booking & digital docs",
    items: [
      "Pick a room & move-in date",
      "e-KYC & digital agreement",
      "Secure payment for deposit/first month"
    ],
    link: { text: "Create account", href: "/create-account" }
  },
  {
    number: "03",
    icon: (
      <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/></svg>
    ),
    title: "Move in & get settled",
    items: [
      "Owner handover checklist",
      "Upload inventory photos",
      "Access Wi-Fi and house rules"
    ],
    link: { text: "Need help?", href: "#" }
  },
  {
    number: "04",
    icon: (
      <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 11v5M12 11v5M16 11v5"/></svg>
    ),
    title: "Monthly rent & services",
    items: [
      "Auto-reminders & receipts",
      "Pause/resume meals during travel",
      "Add laundry or house-help plans"
    ],
    link: { text: "How payments work", href: "#" }
  }
];

const StepByStepSection = () => (
  <section className="max-w-7xl mx-auto px-4 py-12">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">Step-by-step</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {steps.map((step, idx) => (
        <div key={idx} className="relative">
          <div className="absolute -top-6 left-6 bg-white border rounded-full px-4 py-1 font-bold text-gray-600 shadow">{step.number}</div>
          <div className="bg-white rounded-2xl border p-6 pt-10 flex flex-col items-start shadow">
            <div className="bg-green-100 rounded-full p-2 mb-3">{step.icon}</div>
            <div className="font-bold text-lg mb-1 text-gray-800">{step.title}</div>
            <ul className="text-gray-700 text-sm mb-3 space-y-1">
              {step.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2"><span className="text-green-600">&#10003;</span> {item}</li>
              ))}
            </ul>
            <a href={step.link.href} className="text-green-700 font-medium hover:underline flex items-center gap-1">{step.link.text} <span>&rarr;</span></a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default StepByStepSection;
