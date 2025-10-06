
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Phone } from "lucide-react";

// Helper to animate text word by word
const AnimatedText = ({ text, delayOffset = 0 }) => {
  const words = text.split(" ");
  return (
    <p className="text-gray-900 mb-4 flex flex-wrap justify-center text-lg md:text-2xl leading-relaxed font-medium max-w-3xl mx-auto">
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
          className="mr-2"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-b from-blue-200 via-blue-200 to-blue-200"
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-12 text-center text-gray-900"
        >
          Contact
        </motion.h2>

        {/* Layout: Info Left + Form Right */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Left: Contact Info */}
          <motion.div
            className="w-full md:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 90 }}
          >
            <AnimatedText
              text="Let’s connect! You can reach me via email, phone, or my socials below."
              delayOffset={0.1}
            />

            {/* Email */}
            <div className="flex items-center gap-4">
              <Mail className="text-indigo-600" size={28} />
              <div>
                <h3 className="font-semibold text-lg md:text-xl text-gray-900">
                  Email
                </h3>
                <a
                  href="mailto:lornanaula0042@gmail.com"
                  className="text-gray-800 hover:text-indigo-600 transition text-base md:text-lg"
                >
                  lornanaula0042@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <Phone className="text-indigo-600" size={28} />
              <div>
                <h3 className="font-semibold text-lg md:text-xl text-gray-900">
                  Phone
                </h3>
                <p className="text-gray-800 text-base md:text-lg">
                  +256 762 634 298
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <MapPin className="text-indigo-600" size={28} />
              <div>
                <h3 className="font-semibold text-lg md:text-xl text-gray-900">
                  Location
                </h3>
                <p className="text-gray-800 text-base md:text-lg">
                  Kampala, Uganda
                </p>
              </div>
            </div>

           {/* Socials */}
<div className="flex items-start gap-4">
  {/* Icons */}
  <div className="flex flex-col gap-2 flex-shrink-0 mt-7">
    <Linkedin className="text-indigo-600" size={28} />
    <Github className="text-indigo-600" size={28} />
  </div>

  {/* Title + Links */}
  <div className="flex flex-col">
    <h3 className="font-semibold text-lg md:text-xl text-gray-900">
      Socials
    </h3>
    <div className="flex flex-col gap-2 mt-1 text-gray-800 text-base md:text-lg">
      <a
        href="https://www.linkedin.com/in/naula-lorna-3513732b5"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-600 transition"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/Lorna56"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-600 transition"
      >
        GitHub
      </a>
    </div>
  </div>
</div>

          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            className="w-full md:w-1/2 bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 90 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Send me a Message
            </h3>

            <div className="mt-4">
              <label className="block font-semibold mb-1 text-left text-gray-800">
                Name
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Jane Doe"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block font-semibold mb-1 text-left text-gray-800">
                Email
              </label>
              <input
                type="email"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block font-semibold mb-1 text-left text-gray-800">
                Message
              </label>
              <textarea
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                rows="5"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <motion.button
              className="mt-6 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 shadow hover:shadow-md transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
