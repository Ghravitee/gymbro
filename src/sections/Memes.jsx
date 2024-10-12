import { useEffect } from "react";

import ZoomParallax from "../components/ZoomParallax/ZoomParallax";

import Lenis from "@studio-freight/lenis";

const Memes = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="mt-[50vh] mb-[100vh]">
      <ZoomParallax />
    </div>
  );
};

export default Memes;
