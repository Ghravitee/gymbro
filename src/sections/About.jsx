import gymbro from "../assets/about-image.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import useInView hook
import MovingDiv from "../components/MovingDiv";

const About = () => {
  // Set up the inView reference
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  const catVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <section
      className=" bg-black pt-16 pb-8 md:pt-32 md:pb-16 px-3"
      ref={ref}
      id="about"
    >
      <div className="container mx-auto py-10 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image Section */}
          <motion.div
            className=""
            initial={{ scale: 4, opacity: 0 }} // Initial scale effect (left scale)
            animate={
              inView
                ? {
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 1, ease: "easeInOut", delay: 0.5 },
                  }
                : {}
            } // Animate to scale 1 and full opacity when in view
            variants={catVariants} // Apply catVariant animations after scaling
            style={{ transformOrigin: "left" }} // Scale from left
            whileInView="visible"
          >
            <motion.img
              src={gymbro}
              alt="Gym Bro"
              className="object-contain h-auto aspect-square mx-auto"
              variants={catVariants} // Apply the catVariants to the image
            />
          </motion.div>

          {/* Text Section */}
          <div className="text-white text-center lg:text-left">
            <motion.div
              className="relative mb-6 w-[30%] h-12 mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }} // Initial vertical position and opacity
              animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to original position and full opacity
              transition={{ duration: 0.5, delay: 1.4 }} // Animation duration and delay
            >
              <h2 className="text-3xl md:text-[1.7rem]">About</h2>
              <div className="w-[25%] h-1 absolute bottom-0 bg-white left-1/2 lg:left-0 transform -translate-x-1/2 md:translate-x-0" />
            </motion.div>

            <motion.h3
              className="text-4xl md:text-[2.5rem] bungee mb-6"
              initial={{ opacity: 0, y: 20 }} // Initial vertical position and opacity
              animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to original position and full opacity
              transition={{ duration: 0.5, delay: 1.8 }} // Animation duration and delay
            >
              $GYM
            </motion.h3>

            <motion.p
              className="text-[1.4rem] md:text-2xl lg:max-w-[38rem] mb-10 lg:leading-[1.7] mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }} // Initial vertical position and opacity
              animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to original position and full opacity
              transition={{ duration: 0.5, delay: 2.2 }} // Animation duration and delay
            >
              Bro, it&apos;s time to lift heavy bags and pump some serious gains
              with the Gym Bro Token! This ain&apos;t your average crypto –
              it&apos;s for the swole apes who know that biceps and bull runs go
              hand in hand. We&apos;re not just about mooning; we&apos;re about
              smashing through resistance levels like they’re personal records.
              Get ready to join the most shredded community in the crypto world
              and show everyone that we&apos;re here to flex, pump, and dominate
              the market. Gym Bro Token – because real gains aren&apos;t just in
              the gym! #SwoleCoin #PumpItUp #DegenLife
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }} // Initial vertical position and opacity
              animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to original position and full opacity
              transition={{ duration: 0.5, delay: 2.6 }} // Animation duration and delay
              href="/"
              className="relative inline-block text-xl font-extrabold bungee group"
            >
              <span className="relative z-10 block px-8 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 group-hover:border-white rounded-lg group-hover:text-white g">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative font-extrabold">Buy now</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </motion.a>

            {/* <motion.a
              href="#"
              className="text-white uppercase px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-semibold bg-gradient-to-r from-green-600 via-green-400 to-green-800 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20 }} // Initial vertical position and opacity
              animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to original position and full opacity
              transition={{ duration: 0.5, delay: 2.6 }} // Animation duration and delay
            >
              Buy Now
            </motion.a> */}
          </div>
        </div>
      </div>
      <MovingDiv />
    </section>
  );
};

export default About;
