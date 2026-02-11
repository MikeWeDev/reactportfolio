import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Standard Imports
import Loading from "./Component/loading";
import NavCol from "./Component/NavBar/NavCol";
import Hero from "./Component/Hero/Hero";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Expriance from "./Component/expriance";
import Services from "./Component/Service";
import Projects from "./Component/Projects";
import Contact from "./Component/contact";
import CaseStudy from "./Component/CaseStudy"; 

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      delay: 200,
      once: true,
    });

    const isDev = import.meta.env.MODE === "development";

    if (isDev) {
      setLoading(false);
    } else {
      const timeout = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timeout);
    }
  }, []);

  if (loading) return <Loading />;

  return (
    <Router>
      <Routes>
        {/* Main one-page portfolio */}
        <Route
          path="/"
          element={
            <main className="overflow-x-hidden bg-[#030712] w-full">
              <NavCol />
              <Hero />
              <About />
              <Skills />
              <Expriance />
              <Services />
              <Projects />
              <Contact />
            </main>
          }
        />

        {/* Dynamic Case Study page */}
        <Route path="/case-study/:id" element={<CaseStudy />} />
      </Routes>
    </Router>
  );
}
