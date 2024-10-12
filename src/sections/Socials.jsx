import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";

const Socials = () => {
  return (
    <div className="py-20 md:py-20 lg:py-32">
      <div className="container">
        <div className="md:hidden relative mb-10 md:mb-20 w-full md:w-[30%] h-6 flex justify-center items-center mx-auto">
          <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[5rem] uppercase bungee text-black">
            Join us!
          </h2>
          <div className="w-[40%] md:w-[25%] h-1 absolute -top-7 bg-black" />
        </div>
        <h2 className="text-center hidden md:block text-[1.5rem] md:text-[2rem] lg:text-[5rem] uppercase bungee text-black">
          join us!
        </h2>

        <h2 className="text-center text-xl md:text-2xl lg:text-4xl font-bold mb-10">
          Join us on this epic fitness journey as we celebrate strength,
          endurance, and the grind. Power up with{" "}
          <span className="bungee font-bold">$GYM</span> and take your fitness
          to the next level!
        </h2>

        <div className="flex gap-3 items-center justify-center">
          <a
            href="#"
            className="hover:shadow-none transition duration-300 shadow-[-1px_2px_0px_2px_#000000] w-20 h-20 rounded-full bg-black flex justify-center items-center "
          >
            <RiTwitterXFill color="white" className=" rounded-full text-4xl" />
          </a>
          <a
            href="#"
            className="group hover:shadow-none hover:bg transition duration-300 shadow-[-1px_2px_0px_2px_#000000] w-20 h-20 rounded-full bg-black flex justify-center items-center"
          >
            <BiLogoTelegram color="white" className=" rounded-full text-4xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
