import { useState, useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import AOS from "aos";
import "aos/dist/aos.css";

import loader1 from "../src/assets/about-image.png"; // Import the loader image
import Roadmap from "./sections/Roadmap";
import Socials from "./sections/Socials";
// import Memes from "./sections/Memes";

const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <img
      src={loader1}
      alt="Loading..."
      className="aspect-square object-contain w-[40%]"
    />
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time (for example, 2 seconds)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with desired duration
  }, []);

  return (
    <div className="overflow-hidden relative">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />

          <Hero />
          <About />

          <Roadmap />
          <Socials />
        </>
      )}
    </div>
  );
};

export default App;
