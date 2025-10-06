// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// export default function App() {
//   return (
//     <div>
//       <Header />
//       <Hero />
//       <About />
//       <Projects />
//       <Contact />
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

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200">
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
