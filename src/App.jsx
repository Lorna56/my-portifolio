
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 overflow-hidden">
      
      {/* Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"
          style={{ top: "-8rem", left: "-8rem" }}
        />
        <div
          className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"
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

      {/* Main Content */}
      <main className="flex-grow relative z-10">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
