
import StepByStepSection from '../components/StepByStepSection';
import AddOnServicesSection from '../components/AddOnServicesSection';
import FirstWeekSection from '../components/FirstWeekSection';

const HowItWorks = () => (
  <div className="pt-24 bg-gradient-to-b from-green-50 to-white min-h-screen">
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 text-gray-800">
        How <span className="text-green-600">Hostro</span> works
      </h1>
      <p className="text-center text-gray-600 mb-8">
        From discovery to move-in and monthly life — everything streamlined for PG & co-living.
      </p>
      <div className="flex justify-center gap-4 mb-10">
        <button className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition">Find a place</button>
        <button className="px-6 py-3 rounded-lg border border-gray-300 text-gray-800 font-semibold shadow hover:bg-green-50 transition">Talk to us</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl border p-6 flex flex-col items-start shadow">
          <div className="bg-green-100 rounded-full p-2 mb-3"><svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></div>
          <div className="font-bold text-lg mb-1 text-gray-800">Discover</div>
          <div className="text-gray-600 text-sm">Verified PGs with photos, amenities, and map view.</div>
        </div>
        <div className="bg-white rounded-2xl border p-6 flex flex-col items-start shadow">
          <div className="bg-green-100 rounded-full p-2 mb-3"><svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="14" rx="2"/><rect x="7" y="3" width="10" height="4" rx="1"/></svg></div>
          <div className="font-bold text-lg mb-1 text-gray-800">Book</div>
          <div className="text-gray-600 text-sm">Choose a room, pick a move-in date, and reserve instantly.</div>
        </div>
        <div className="bg-white rounded-2xl border p-6 flex flex-col items-start shadow">
          <div className="bg-green-100 rounded-full p-2 mb-3"><svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 11v5M12 11v5M16 11v5"/></svg></div>
          <div className="font-bold text-lg mb-1 text-gray-800">Manage</div>
          <div className="text-gray-600 text-sm">Pay rent, track invoices, request support — all in one place.</div>
        </div>
      </div>
    </section>
    <StepByStepSection />
    <AddOnServicesSection />
    <FirstWeekSection />
  </div>
);

export default HowItWorks;
