export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <form className="space-y-4 bg-gray-50 p-6 rounded-lg shadow">
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input type="text" className="w-full border rounded-lg px-3 py-2" placeholder="Jane Doe" required />
          </div>
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input type="email" className="w-full border rounded-lg px-3 py-2" placeholder="you@example.com" required />
          </div>
          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea className="w-full border rounded-lg px-3 py-2" rows="5" placeholder="Tell me about your project..." required></textarea>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">Send</button>
        </form>
        <div>
          <h3 className="font-semibold text-lg mb-2">Get in touch</h3>
          <p>Email: <a href="mailto:your.email@example.com" className="text-indigo-600">your.email@example.com</a></p>
          <p>Location: Kampala, Uganda</p>
          <p className="mt-2">LinkedIn / GitHub / Twitter</p>
        </div>
      </div>
    </section>
  );
}
