import { useState } from "react";
import { motion } from "framer-motion";
import image1 from "../assets/first-meme.jpg";
import image2 from "../assets/second-meme.webp";
import image3 from "../assets/third-meme.webp";
import image4 from "../assets/fourth-meme.webp";
import image5 from "../assets/sixth-meme.jpg";
import mobileHero from "../assets/hero-1.png";
import copyIcon from "../assets/copy.svg";
import checkedIcon from "../assets/tick.svg";

const Hero = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("dyenamics228@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <main className="h-screen relative flex items-center justify-center overflow-hidden mt-44">
      {/* Falling Images with Framer Motion */}
      <motion.img
        src={image1}
        alt="Meme 1"
        className="hidden lg:block absolute w-[23rem] h-[23rem] object-contain"
        initial={{ x: 0, y: 0, scale: 4, opacity: 0 }} // Initially centered
        animate={{ x: "-120%", y: "-45%", scale: 1, opacity: 1 }} // Move to top-left
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }} // Animation duration and delay
      />
      <motion.img
        src={image2}
        alt="Meme 2"
        className="hidden lg:block absolute w-52 h-52 object-contain"
        initial={{ x: 0, y: 0, scale: 3, opacity: 0 }} // Initially centered
        animate={{ x: "-200%", y: "80%", scale: 1, opacity: 1 }} // Move to mid-left
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.7 }} // Animation duration and delay
      />
      <motion.img
        src={image3}
        alt="Meme 3"
        className="hidden lg:block absolute w-56 h-56 object-contain"
        initial={{ x: 0, y: 0, scale: 3, opacity: 0 }} // Initially centered
        animate={{ x: "290%", y: "40%", scale: 1, opacity: 1 }} // Move to bottom-right
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.9 }} // Animation duration and delay
      />
      <motion.img
        src={image4}
        alt="Meme 4"
        className="hidden lg:block absolute w-64 h-64 object-contain"
        initial={{ x: 0, y: 0, scale: 3, opacity: 0 }} // Initially centered
        animate={{ x: "0%", y: "-100%", scale: 1, opacity: 1 }} // Move to top-center
        transition={{ duration: 1.2, ease: "easeInOut", delay: 1.1 }} // Animation duration and delay
      />
      <motion.img
        src={image5}
        alt="Meme 5"
        className="hidden lg:block absolute w-[20rem] h-[20rem] object-contain"
        initial={{ x: 0, y: 0, scale: 3, opacity: 0 }} // Initially centered
        animate={{ x: "150%", y: "-60%", scale: 1, opacity: 1 }} // Move to top-right
        transition={{ duration: 1.2, ease: "easeInOut", delay: 1.3 }} // Animation duration and delay
      />
      <img
        src={mobileHero}
        alt="Meme 5"
        className="lg:hidden absolute top-0 left-0 right-0 mx-auto"
      />

      {/* Main Hero Content with Framer Motion */}
      <div className="flex flex-col gap-4 items-center z-10 m-0">
        <motion.h1
          className="text-[6rem] bungee"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          $GYM
        </motion.h1>

        <motion.h3
          className="uppercase font-semibold text-[2.5rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          Buy hard or Go Home
        </motion.h3>

        <div
          className="copy-container cursor-pointer flex items-center gap-2"
          onClick={handleCopy}
        >
          <img src={hasCopied ? checkedIcon : copyIcon} alt="copy" />
          <p className="text-xl font-medium md:text-xl lg:text-3xl break-all">
            CA: 9mHX7EVstzhAm5LEMzxFQZahjkFMeeo4ovvSXPA9pump
          </p>
        </div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
          href="/"
          className="relative inline-block text-lg group bungee font-extrabold"
        >
          <span className="relative z-10 block px-8 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Buy now</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </motion.a>
      </div>
    </main>
  );
};

export default Hero;
