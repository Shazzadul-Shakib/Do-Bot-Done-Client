import logo from "../../assets/Do-Bot-Done-logo.svg";
import img from "../../assets/profile.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import { FiSun, FiBell, FiPlus, FiMinus } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ProfileCard from "../ProfileCard/ProfileCard";
import useOutsideClick from "../../Hooks/useOutsideClick";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  // Toggle menubar
  const [openMenu, setOpenMenu, menuRef] = useOutsideClick(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  // Toggle profilecard
  const [openProfile, setOpenProfile, profileRef] = useOutsideClick(false);
  const toggleProfile = () => {
    setOpenProfile(!openProfile);
  };

  return (
    <section className="sticky top-0 z-50">
      <div className=" relative">
        {/* Upper navbar section */}
        <div className="bg-bg flex justify-between items-center px-4 py-4 md:px-8 p-2">
          {/* logo */}
          <div>
            <img className="h-10 md:h-14" src={logo} alt="" />
          </div>
          {/* Search bar */}
          <div className="hidden md:flex relative max-w-md">
            <input
              className="block w-full py-1 px-10 pr-4 rounded-lg border border-secondary focus:outline focus:outline-primary "
              type="text"
            />
            <div className=" absolute inset-y-0 right-1 pr-2 flex items-center pointer-events-none">
              <AiOutlineSearch className=" text-lg" />
            </div>
          </div>

          {/* Icons for theme,notifications */}
          <div className=" flex">
            <BsSearch className="text-lg mx-2 md:mx-4 md:hidden" />
            <FiSun className="text-xl mx-2 md:mx-4" />
            <FiBell className="text-xl mx-3 md:mx-4" />
            <div ref={menuRef}>
              <div onClick={toggleMenu}>
                <FiMinus
                  className={`text-xl mx-2 md:mx-4 cursor-pointer ${openMenu || "hidden"}`}
                />
                <FiPlus
                  className={`text-xl mx-2 md:mx-4 cursor-pointer ${openMenu && "hidden"}`}
                />
              </div>
              {/* Lower navbar section contains navlinks */}
              {openMenu && (
                <ul className="absolute top-full right-1 bg-bg text-secondary py-2 px-4 rounded-lg text-center ">
                  <li className="py-1">
                    <Link className="  px-4 py-1 rounded-lg  hover:bg-primary hover:text-bg ">
                      Todo Bot
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link className="  px-4 py-1 rounded-lg  hover:bg-primary hover:text-bg">
                      Wallet Bot
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link className="  px-4 py-1 rounded-lg  hover:bg-primary hover:text-bg">
                      Schedule Bot
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>

          <div ref={profileRef} className="h-8 w-8 ml-2 rounded-full md:hidden">
            <div onClick={toggleProfile}>
              <img
                className="h-full rounded-full "
                src={user.photoURL || img}
              />
            </div>
            {/* Profilecard */}
            {openProfile && (
              <div className=" absolute top-full right-0 mx-3 border-4 border-bg rounded-lg md:hidden">
                <ProfileCard />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
