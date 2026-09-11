import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" mx-auto py-4 border-b border-gray-200">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Hamburger in mobile display */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          <RxHamburgerMenu />
        </button>

        {/* Logo */}
        <img src={Logo} className="w-[120px] h-[30px]" alt="DevStack" />

        {/* Navigation Menu */}
        <ul
          className={`${isOpen ? "flex" : "hidden"} 
        md:flex
        absolute md:static 
        top-[65px] left-0
        w-full md:w-auto 
        bg-white md:bg-transparent 
        flex-col md:flex-row 
        gap-4
        items-center
        py-4 md:py-0
        shadow-md md:shadow-none
        `}
        >
          <li className="md:text-[#DB2777] md:font-semibold">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* Sign In / Sign Up */}
        <div className="flex gap-2 md:gap-4 items-center">
          <button className="text-sm md:text-base">Sign In</button>

          <button className="bg-[#D91B7E] text-white px-3 md:px-4 py-2 rounded-4xl text-sm md:text-base">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
