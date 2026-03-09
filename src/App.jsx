import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { MessageSquareText } from "lucide-react";

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-pink-100 via-green-50 to-emerald-100 overflow-hidden">

      {/* Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"
          style={{ top: "-8rem", left: "-8rem" }}
        />
        <div
          className="absolute w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"
          style={{ bottom: "-8rem", right: "-8rem", animationDelay: "12s" }}
        />
      </div>

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#111827",
            color: "#f9fafb",
            fontWeight: "500",
            borderRadius: "8px",
            padding: "12px 16px",
          },
        }}
      />

      <main className="flex-grow relative z-10">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Scroll To Top Button */}
      <ScrollToTopButton />

      {/* Global AI Assistant Floating Widget/Modal */}
      {isChatOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-80 h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="flex justify-between items-center bg-pink-500 text-white px-4 py-3">
            <span className="font-bold flex items-center gap-2"><MessageSquareText size={18} /> Chat with my AI Agent</span>
            <button onClick={() => setIsChatOpen(false)} className="text-white hover:text-gray-200 font-bold text-xl">
              &times;
            </button>
          </div>
          <iframe
            src="https://www.jotform.com/agent/019b30f38d90769ba70871b64638de23cae5"
            frameBorder="0"
            className="w-full h-[calc(100%-50px)]"
            title="Chat with my AI Agent"
          ></iframe>
        </div>
      )}

      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-pink-500 text-white px-5 py-3 rounded-full font-bold shadow-2xl hover:bg-pink-600 hover:scale-105 transition-all outline-none"
      >
        <MessageSquareText size={20} />
        <span className="hidden sm:inline">Chat with my AI Agent</span>
      </button>

      {/* Footer */}
      <Footer />
    </div>
  );
}
