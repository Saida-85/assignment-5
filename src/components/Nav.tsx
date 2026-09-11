import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="bg-red-100 ">
      <div className="container mx-auto flex justify-between">
        <RxHamburgerMenu />

        <img src={Logo} className="w-[120px] h-[30px]" alt="" />

        <ul className="flex gap-4 items-center">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="btn btn-active btn-error">Error</button>
      </div>
    </nav>
  );
};

export default Nav;
