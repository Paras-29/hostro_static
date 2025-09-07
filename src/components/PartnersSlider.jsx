import { useState, useEffect, useRef } from "react";

const partners = [
  {
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="14" rx="2"/><rect x="7" y="3" width="10" height="4" rx="1"/></svg>
    ),
    name: "Co-livo",
    desc: "Premium co-living spaces with modern amenities and community vibes."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 9V7a5 5 0 00-10 0v2"/><rect x="5" y="9" width="14" height="10" rx="2"/></svg>
    ),
    name: "Tenet Group",
    desc: "Trusted PG and rental property management solutions across India."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="14" rx="2"/><rect x="7" y="3" width="10" height="4" rx="1"/></svg>
    ),
    name: "UrbanStay",
    desc: "City-based short and long-term stays tailored for students."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
    ),
    name: "RoomMate Hub",
    desc: "Find and match compatible roommates for peaceful living."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 9V7a5 5 0 00-10 0v2"/><rect x="5" y="9" width="14" height="10" rx="2"/></svg>
    ),
    name: "StayConnect",
    desc: "Bridging PG owners and students with seamless digital tools."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="14" rx="2"/><rect x="7" y="3" width="10" height="4" rx="1"/></svg>
    ),
    name: "Hostro Vendor Network",
    desc: "A curated network of reliable vendors powering Hostro services."
  }
];

const cardsPerView = 4;

export default function PartnersSlider() {
  const [start, setStart] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const next = () => {
    setStart((prev) => (prev + cardsPerView) % partners.length);
  };
  const prev = () => {
    setStart((prev) => (prev - cardsPerView + partners.length) % partners.length);
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(next, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const visible = [];
  for (let i = 0; i < cardsPerView; i++) {
    visible.push(partners[(start + i) % partners.length]);
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-2 text-green-700 font-medium">Our Partners</div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Collaborating for Better Living</h2>
      <p className="text-gray-600 mb-6">We team up with organizations that share our mission to elevate PG & co-living.</p>
      <div className="text-sm text-gray-500 mb-4">Auto-scrolling &middot; hover to pause</div>
      <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div className="flex gap-6 overflow-x-auto pb-2">
          {visible.map((p, idx) => (
            <div key={idx} className="min-w-[260px] bg-white border rounded-2xl p-6 flex flex-col items-start shadow hover:shadow-lg transition">
              {p.icon}
              <div className="font-bold text-lg text-green-700 mt-2 mb-1">{p.name}</div>
              <div className="text-gray-600 text-sm">{p.desc}</div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center mt-6">
          <button onClick={prev} className="bg-white border rounded-full p-2 shadow hover:bg-green-50 mx-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg></button>
          <button onClick={next} className="bg-white border rounded-full p-2 shadow hover:bg-green-50 mx-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg></button>
        </div>
      </div>
    </section>
  );
}
// ...existing code...
