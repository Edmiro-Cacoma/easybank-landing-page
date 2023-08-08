import { Logo } from "../../Assets/images/icons/icons";
import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
      <header className="relative flex flex-row justify-between z-10 bg-white  items-center border-b-White h-16">
        <div className=" mx-auto flex flex-row items-center justify-around w-[75rem] ">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
          <Navbar />
          <div className="hidden relative md:-left-16 md:flex">
            <a
              href="/"
              className="rounded-full bg-gradient-to-r from-lime-green to-bright-Cyan text-white p-2"
            >
              Request Invite
            </a>
          </div>
        </div>
      </header>
    );
};
export default Header;