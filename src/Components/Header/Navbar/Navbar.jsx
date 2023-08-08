import { useState } from "react";
import { Close,Hamburger } from "../../../Assets/images/icons/icons";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    return (
      <>
        <div className=" ">
          <button
            type="button"
            className="md:hidden relative -right-24 z-20"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <img src={Close} alt="" />
            ) : (
              <img src={Hamburger} alt="" />
            )}
          </button>

          <div
            className={`relative -z-1 top-44 right-0 left-0 bg-bright-Cyan opacity-30 h-72 w-screen ${
              isMenuOpen ? "flex" : "hidden"
            }`}
          >
            <nav className="relative z-10">
              <ul className="bg-white relative z-10 w-[28rem] right-4 h-80 top-16 mx-auto  flex flex-col items-center justify-center gap-6 p-4">
                <li>
                  <a href="/">Home </a>
                </li>
                <li>
                  <a href="/"> About </a>
                </li>
                <li>
                  <a href="/"> Contact </a>
                </li>
                <li>
                  <a href="/"> Blog</a>
                </li>
                <li>
                  <a href="/"> Careers</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <nav className=" relative right-32 flex flex-row items-center justify-between text-grayish-Blue ">
          <ul className="hidden  md:flex md:flex-row md:gap-10">
            <li>
              <a href="/">Home </a>
            </li>
            <li>
              <a href="/"> About </a>
            </li>
            <li>
              <a href="/"> Contact </a>
            </li>
            <li>
              <a href="/"> Blog</a>
            </li>
            <li>
              <a href="/"> Careers</a>
            </li>
          </ul>
        </nav>
      </>
    );
};
export default Navbar;
