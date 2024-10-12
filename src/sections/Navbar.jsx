import { useState } from "react";
import { motion } from "framer-motion";
import ResponsiveMenu from "../components/ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className="w-full fixed h-[70px] border-y-[8px] border-y-black z-[1000] bg-white top-0  py-0 px-[1rem]">
      {/* Desktop view */}
      <nav className="hidden lg:flex lg:justify-between lg:items-center h-full">
        <p className="text-3xl bungee">$GYM</p>
        <div className="h-full flex items-center">
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05, backgroundColor: "#0e9c7d" }}
            transition={{ duration: 0.3 }}
            className="h-full py-3 px-[3rem] border-l-[8px] border-l-black text-[1.2rem] font-bold bg-white"
          >
            ABOUT
          </motion.a>
          <motion.a
            href="#roadmap"
            whileHover={{ scale: 1.05, backgroundColor: "#0e9c7d" }}
            transition={{ duration: 0.3 }}
            className="h-full py-3 px-[3rem] border-l-[8px] border-l-black text-[1.2rem] font-bold bg-white"
          >
            ROADMAP
          </motion.a>
          <motion.a
            href="#socials"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#000000",
              color: "#ffffff",
            }}
            transition={{ duration: 0.3 }}
            className="h-full py-3 px-[3rem] border-l-[8px] border-l-black text-[1.2rem] font-bold bg-white"
          >
            SOCIALS
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "#000000" }}
            transition={{ duration: 0.3 }}
            className="h-full py-3 px-[3rem] border-r-[8px] border-r-black border-l-[8px] border-l-black text-[1.2rem] font-bold bg-black text-white"
          >
            BUY NOW
          </motion.a>
        </div>
      </nav>
      <div className="flex items-center justify-between lg:hidden py-4">
        {/* Mobile Hamburger icon */}
        <p className="text-3xl bungee">$GYM</p>
        {showMenu ? (
          <HiMenuAlt1
            onClick={toggleMenu}
            className=" cursor-pointer transition-all"
            size={30}
          />
        ) : (
          <HiMenuAlt3
            onClick={toggleMenu}
            className="cursor-pointer transition-all"
            size={30}
          />
        )}
      </div>
      <ResponsiveMenu showMenu={showMenu} closeMenu={closeMenu} />
    </header>
  );
};

export default Navbar;
