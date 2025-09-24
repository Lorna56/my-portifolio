import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";

// Helper to animate text word by word
const AnimatedText = ({ text, delayOffset = 0 }) => {
  const words = text.split(" ");
  return (
    <p className="text-gray-600 mb-4 flex flex-wrap items-center">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: delayOffset + index * 0.05,
          }}
          className="mr-2 flex items-center"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
};

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-20 relative">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-8 relative z-10"
      >
        Contact
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 relative z-10">
        {/* Contact Form */}
        <motion.form
          className="space-y-4 bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 90 }}
        >
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Jane Doe"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              rows="5"
              placeholder="Tell me about your project..."
              required
            ></textarea>
          </div>
          <motion.button
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 shadow hover:shadow-md transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </motion.form>

        {/* Contact Info with static icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 90 }}
          className="space-y-4"
        >
          <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
            <Mail size={20} /> Email
          </h3>
          <p className="text-gray-600 ml-6">
            <a href="mailto:lornanaula0042@gmail.com" className="text-indigo-600">
              lornanaula0042@gmail.com
            </a>
          </p>

          <h3 className="font-semibold text-lg mt-4 mb-2 flex items-center gap-2">
            <MapPin size={20} /> Location
          </h3>
          <p className="text-gray-600 ml-6">Kampala, Uganda</p>

          <h3 className="font-semibold text-lg mt-4 mb-2 flex items-center gap-2">
            <Linkedin size={20} /> Social
          </h3>
          <p className="text-gray-600 ml-6 flex items-center gap-3">
            <a href="#" className="hover:text-indigo-600">LinkedIn</a>
            <a href="#" className="hover:text-indigo-600">GitHub</a>
            <a href="#" className="hover:text-indigo-600">Twitter</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
