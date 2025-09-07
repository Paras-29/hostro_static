const Contact = () => (
  <div className="pt-24 bg-gradient-to-b from-green-50 to-white min-h-screen">
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">Contact us</h1>
      <p className="text-center text-gray-600 mb-8">Questions, partnerships, or support — we’d love to hear from you.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow p-8">
        {/* Left: Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2">How can we help?</h2>
          <p className="text-gray-600 mb-4">Reach out for product questions, media, partnerships, or report a problem.</p>
          <div className="mb-2 text-sm">
            <div><span className="font-medium">Support:</span> <a href="mailto:support@hostro.in" className="text-green-700">support@hostro.in</a></div>
            <div><span className="font-medium">Partners:</span> <a href="mailto:partners@hostro.in" className="text-green-700">partners@hostro.in</a></div>
            <div><span className="font-medium">Phone:</span> <a href="tel:+919876543210" className="text-green-700">+91 98765 43210</a></div>
            <div className="mt-2">Prefer chat? <a href="#" className="text-green-700 underline">Visit Support.</a></div>
          </div>
          <div className="mt-6 p-3 rounded-lg border text-sm text-gray-700">
            <div className="font-medium mb-1">Office</div>
            Jaipur, Rajasthan (remote-friendly team)
          </div>
        </div>
        {/* Right: Form */}
        <form className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold mb-2">Send a message</h2>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Your name" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-700 bg-white" />
            <input type="email" placeholder="you@example.com" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-700 bg-white" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="9876543210" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-700 bg-white" />
            <input type="text" placeholder="Partnership / Support / Media..." className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-700 bg-white" />
          </div>
          <textarea rows={4} placeholder="Tell us a bit more..." className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-700 bg-white" />
          <button type="submit" className="px-6 py-2 rounded bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition w-fit">Send message</button>
        </form>
      </div>
    </section>
  </div>
);

export default Contact;
