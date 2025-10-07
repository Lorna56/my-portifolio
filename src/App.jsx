
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// export default function App() {
//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200">
//       {/* Main content grows to push footer down */}
//       <main className="flex-grow">
//         <Header />
//         <Hero />
//         <About />
//         <Projects />
//         <Contact />
//       </main>

//       {/* Footer stays at the bottom */}
//       <Footer />
//     </div>
//   );
// }
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast"; // <- import Toaster

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200">
      {/* Toast notifications */}
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

      {/* Main content grows to push footer down */}
      <main className="flex-grow">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
}
