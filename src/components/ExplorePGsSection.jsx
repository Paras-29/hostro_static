import { useState } from "react";

const amenities = ["Wifi", "Ac", "Laundry", "Parking", "Meals", "Cctv", "Power Backup"];
const cities = ["Jaipur", "Pune", "Bengaluru", "Delhi", "Mumbai", "Chennai"];

export default function ExplorePGsSection() {
  const [price, setPrice] = useState([1000, 25000]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [gender, setGender] = useState("");
  const [sort, setSort] = useState("Recent");

  // Dummy filter logic
  const noPGs = true;

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore PGs</h2>
      <div className="bg-white rounded-2xl shadow p-6 mb-8 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input value={city} onChange={e => setCity(e.target.value)} type="text" placeholder="City (e.g., Jaipur)" className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-700 bg-white" />
          <input value={area} onChange={e => setArea(e.target.value)} type="text" placeholder="Search name / area" className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-700 bg-white" />
          <select value={gender} onChange={e => setGender(e.target.value)} className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white">
            <option value="">Any gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <select value={sort} onChange={e => setSort(e.target.value)} className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white">
            <option value="Recent">Sort: Recent</option>
            <option value="Low">Sort: Price Low-High</option>
            <option value="High">Sort: Price High-Low</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-medium text-gray-700">Price range</div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-500">₹1,000</span>
            <input type="range" min={1000} max={25000} value={price[0]} onChange={e => setPrice([+e.target.value, price[1]])} className="w-1/3 accent-green-600" />
            <span className="text-sm font-semibold text-gray-700">₹{price[0].toLocaleString()} – ₹{price[1].toLocaleString()}</span>
            <input type="range" min={1000} max={25000} value={price[1]} onChange={e => setPrice([price[0], +e.target.value])} className="w-1/3 accent-green-600" />
            <span className="text-xs text-gray-500">₹25,000</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {amenities.map(a => (
            <button key={a} type="button" className={`px-4 py-1 rounded-full border ${selectedAmenities.includes(a) ? 'bg-green-600 text-white' : 'bg-white text-gray-700'} font-medium shadow`} onClick={() => setSelectedAmenities(selectedAmenities.includes(a) ? selectedAmenities.filter(x => x !== a) : [...selectedAmenities, a])}>{a}</button>
          ))}
        </div>
        <div className="flex gap-4 justify-end">
          <button className="px-6 py-2 rounded bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition">Apply</button>
          <button className="px-6 py-2 rounded border border-gray-300 text-gray-800 font-semibold shadow hover:bg-green-50 transition">Reset</button>
        </div>
      </div>
      {/* No PGs match section */}
      {noPGs && (
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center justify-center text-center">
          <div className="text-4xl mb-2">😕</div>
          <div className="font-semibold text-gray-800 mb-2">No PGs match your filters</div>
          <div className="text-gray-600 mb-4">Try adjusting the price range, removing a few amenities, or pick a suggested city.</div>
          <div className="flex flex-wrap gap-2 mb-4">
            {cities.map(c => (
              <button key={c} className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 font-medium shadow hover:bg-green-50 transition">{c}</button>
            ))}
          </div>
          <button className="px-6 py-2 rounded bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition">Reset filters</button>
        </div>
      )}
    </section>
  );
}
