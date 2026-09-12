import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white mx-auto py-4 border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Main Navbar */}
        <div className="flex items-center justify-between">
          {/* Hamburger - Mobile only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            <RxHamburgerMenu />
          </button>

          {/* Logo */}
          <img src={Logo} className="w-[120px] h-[30px]" alt="DevStack" />

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-[29px] items-center">
            <li className="text-[#DB2777] font-semibold">Home</li>
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

        {/* Mobile Navigation */}
        {isOpen && (
          <ul className="md:hidden flex flex-col gap-4 mt-4 py-4 border-t border-gray-200">
            <li className="text-[#DB2777] font-semibold">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
