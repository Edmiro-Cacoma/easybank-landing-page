import * as data from "../../data";
import { useState } from "react";

const Header = () => {
  const [count, setCount] = useState(1);

  const displayMenu = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <header className="absolute z-10 top-0 left-0 right-0 bg-white px-3 md:px-0 flex items-center justify-center h-16 lg:h-20 lg:px-20 xl:px-40 cursor-pointer">
      <img
        src={data.menus[0]}
        alt={data.altText[0]}
        className=" relative md:-left-10 mr-0 self-center"
      />
      <img
        src={count % 2 === 0 ? data.menus[3] : data.menus[2]}
        onClick={displayMenu}
        alt=""
        className="self-center ml-auto cursor-pointer md:hidden"
      />
      {count % 2 === 0 ? data.navMobile : data.navDesktop}
      <button
        type="button"
        className="bg-gradient-to-r from-lime-green to-bright-Cyan text-white ml-auto px-6 py-3 rounded-full self-center  transition hidden md:block hover:brightness-105"
      >
        Request Invite
      </button>
    </header>
  );
};
export default Header;
