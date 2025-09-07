import PartnersSlider from '../components/PartnersSlider';
import LaundrySection from '../components/LaundrySection';
import TiffinSection from '../components/TiffinSection';
import ExplorePGsSection from '../components/ExplorePGsSection';

const Home = () => (
  <div className="pt-24 bg-gradient-to-b from-green-50 to-white min-h-screen">
    <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left: Hero Text */}
      <div>
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-green-100 text-green-700 font-medium text-sm shadow">Book verified PGs across India</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-700 mb-4 leading-tight">
          Find your perfect <span className="text-green-600">PG</span> —<br />fast, verified, and affordable.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Hostro helps students and professionals discover trusted PGs, compare rooms and amenities, book securely, and manage everything in one place.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 mb-6">
          <input type="text" placeholder="Search by city (e.g., Jaipur)" className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-700 bg-white" />
          <button type="submit" className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition">Search</button>
        </form>
        <div className="flex gap-4 mb-8">
          <button className="px-6 py-3 rounded-lg bg-white border border-gray-300 text-green-700 font-semibold shadow hover:bg-green-50 transition">Browse PGs</button>
          <button className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition">List your PG</button>
        </div>
        <div className="flex gap-6 mt-8">
          <div className="bg-white rounded-lg shadow px-6 py-4 text-center">
            <div className="text-xl font-bold text-green-700">2,400+</div>
            <div className="text-xs text-gray-500">PGs</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-4 text-center">
            <div className="text-xl font-bold text-green-700">35+</div>
            <div className="text-xs text-gray-500">Cities</div>
          </div>
          <div className="bg-white rounded-lg shadow px-6 py-4 text-center">
            <div className="text-xl font-bold text-green-700">50k+</div>
            <div className="text-xs text-gray-500">Bookings</div>
          </div>
        </div>
      </div>
      {/* Right: Image Grid */}
      <div className="grid grid-cols-2 gap-4">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="PG Room" className="rounded-2xl object-cover w-full h-40 shadow" />
        <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80" alt="PG Room" className="rounded-2xl object-cover w-full h-40 shadow" />
        <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="PG Room" className="rounded-2xl object-cover w-full h-40 shadow" />
        <img src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80" alt="PG Room" className="rounded-2xl object-cover w-full h-40 shadow" />
      </div>
    </section>
  <ExplorePGsSection />
  <LaundrySection />
  <TiffinSection />
  <PartnersSlider />
  </div>
);

export default Home;
