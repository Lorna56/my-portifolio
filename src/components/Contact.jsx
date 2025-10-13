
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Phone } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

// Helper to animate text word by word
const AnimatedText = ({ text, delayOffset = 0 }) => {
  const words = text.split(" ");
  return (
    <p className="text-gray-900 mb-8 flex flex-wrap justify-center text-2xl md:text-3xl leading-relaxed font-semibold max-w-3xl mx-auto">
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
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const toastId = toast.loading("Sending your message...");

    try {
      const res = await fetch("https://portifolio-api-ulbj.onrender.com/api/mail/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("✅ Message sent successfully!", { id: toastId });
        e.target.reset();
      } else {
        toast.error("❌ Failed to send message. Try again.", { id: toastId });
      }
    } catch (error) {
      console.error(error);
      toast.error("⚠️ Something went wrong. Please try again.", { id: toastId });
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-b from-blue-200 via-blue-200 to-blue-200"
    >
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-extrabold mb-14 text-center text-gray-900"
        >
          Contact
        </motion.h2>

        <div className="flex flex-col md:flex-row items-start justify-between gap-16">
          {/* Left: Contact Info */}
          <motion.div
            className="w-full md:w-1/2 space-y-10"
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
            <div className="flex items-center gap-5">
              <Mail className="text-indigo-600" size={36} />
              <div>
                <h3 className="font-bold text-2xl md:text-3xl text-gray-900">
                  Email
                </h3>
                <a
                  href="mailto:lornanaula0042@gmail.com"
                  className="text-gray-800 hover:text-indigo-600 transition text-xl md:text-2xl"
                >
                  lornanaula0042@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-5">
              <Phone className="text-indigo-600" size={36} />
              <div>
                <h3 className="font-bold text-2xl md:text-3xl text-gray-900">
                  Phone
                </h3>
                <p className="text-gray-800 text-xl md:text-2xl">
                  +256 762 634 298
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-5">
              <MapPin className="text-indigo-600" size={36} />
              <div>
                <h3 className="font-bold text-2xl md:text-3xl text-gray-900">
                  Location
                </h3>
                <p className="text-gray-800 text-xl md:text-2xl">
                  Kampala, Uganda
                </p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-start gap-5">
              <div className="flex flex-col gap-3 flex-shrink-0 mt-7">
                <Linkedin className="text-indigo-600" size={36} />
                <Github className="text-indigo-600" size={36} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-2xl md:text-3xl text-gray-900">
                  Socials
                </h3>
                <div className="flex flex-col gap-3 mt-2 text-gray-800 text-xl md:text-2xl">
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

          {/* Right: Contact Form (Modern / Industry-standard) */}
          <motion.form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 bg-white p-10 md:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 90 }}
          >
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">
              Send me a Message
            </h3>

            {/* Name */}
            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-gray-800 text-xl md:text-2xl">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Jane Doe"
                className="border border-gray-300 rounded-xl px-5 py-4 text-xl md:text-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-gray-800 text-xl md:text-2xl">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="border border-gray-300 rounded-xl px-5 py-4 text-xl md:text-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                required
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-gray-800 text-xl md:text-2xl">
                Message
              </label>
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                className="border border-gray-300 rounded-xl px-5 py-4 text-xl md:text-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm resize-none"
                required
              ></textarea>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={sending}
              className="mt-4 w-full bg-indigo-600 text-white py-4 text-2xl md:text-3xl rounded-xl font-bold hover:bg-indigo-700 shadow-lg hover:shadow-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {sending ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
