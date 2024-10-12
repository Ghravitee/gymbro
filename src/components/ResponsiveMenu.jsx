// import { FaUserCircle } from "react-icons/fa";
const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/",
  },
  {
    id: 2,
    name: "ABOUT",
    link: "#about",
  },
  {
    id: 3,
    name: "ROADMAP",
    link: "#roadmap",
  },
  {
    id: 4,
    name: "SOCIALS",
    link: "#socials",
  },
];

// eslint-disable-next-line react/prop-types
const ResponsiveMenu = ({ showMenu, closeMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-black text-white px-8 pb-6 pt-16 transition-all duration-200 lg:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {Navlinks.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="mb-5 inline-block "
                  onClick={closeMenu} // Close menu on link click
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
