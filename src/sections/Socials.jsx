import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";

const Socials = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1500, // Global animation duration
      once: false, // Allow the animation to repeat when scrolling back up
    });
  }, []);

  return (
    <div className="py-20 md:py-20 lg:py-32" id="socials">
      <div className="container">
        {/* Mobile heading animation */}
        <div
          data-aos="fade-up"
          className="md:hidden relative mb-10 md:mb-20 w-full md:w-[30%] h-6 flex justify-center items-center mx-auto"
        >
          <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[5rem] uppercase bungee text-black">
            Join us!
          </h2>
          {/* Underline animation */}
          <div className="w-[40%] md:w-[25%] h-1 absolute -top-7 bg-black" />
        </div>

        {/* Desktop heading animation */}
        <h2
          data-aos="fade-up"
          className="text-center hidden md:block text-[1.5rem] md:text-[2rem] lg:text-[5rem] uppercase bungee text-black"
        >
          join us!
        </h2>

        {/* Animated description */}
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-center text-xl md:text-2xl lg:text-4xl font-bold mb-10"
        >
          Join us on this epic fitness journey as we celebrate strength,
          endurance, and the grind. Power up with{" "}
          <span className="bungee font-bold">$GYM</span> and take your fitness
          to the next level!
        </h2>

        {/* Social icons with AOS bounce animation */}
        <div className="flex gap-3 items-center justify-center">
          <a
            href="https://x.com/gymbrosolana?s=21"
            className="hover:shadow-none transition duration-300 shadow-[-1px_2px_0px_2px_#000000] w-20 h-20 rounded-full bg-black flex justify-center items-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
          >
            <RiTwitterXFill color="white" className="rounded-full text-4xl" />
          </a>
          <a
            href="https://t.me/gymbro_SOL"
            className="hover:shadow-none transition duration-300 shadow-[-1px_2px_0px_2px_#000000] w-20 h-20 rounded-full bg-black flex justify-center items-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="600"
          >
            <BiLogoTelegram color="white" className="rounded-full text-4xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
