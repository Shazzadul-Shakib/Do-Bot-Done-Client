import logo from '../../assets/Do-Bot-Done-logo.svg'
import { AiOutlineSearch } from "react-icons/ai";
import { FiSun, FiBell, FiPlus, FiMinus } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
  const {user}=useContext(AuthContext);
  // Toggle menubar
  const [openMenu,setOpenMenu]=useState(false);
  const toggleMenu=()=>{
    setOpenMenu(!openMenu);//todo make custom hook to toggle
  }


    return (
      <section className="sticky top-0 z-50">
        <div className=" relative">
          {/* Upper navbar section */}
          <div className="bg-bg flex justify-between items-center mx-4 mt-2 md:mx-8 md:mt-0 p-2">
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
              {openMenu ? (
                <FiMinus
                  onClick={toggleMenu}
                  className="text-xl mx-2 md:mx-4"
                />
              ) : (
                <FiPlus onClick={toggleMenu} className="text-xl mx-2 md:mx-4" />
              )}
            </div>
            <div className="h-8 w-8 ml-2 rounded-full md:hidden">
              <img className="h-full rounded-full " src={user?.photoURL} alt="" />
            </div>
          </div>
          {/* Lower navbar section contains navlinks */}
          {openMenu && (
            <ul className="absolute top-full right-1 bg-secondary text-bg py-2 px-4 rounded-lg ">
              <li className="py-1">
                <Link className=" px-4 py-1 rounded-lg hover:bg-primary">
                  Todo Bot
                </Link>
              </li>
              <li className="py-1">
                <Link className=" px-4 py-1 rounded-lg hover:bg-primary">
                  Wallet Bot
                </Link>
              </li>
              <li className="py-1">
                <Link className=" px-4 py-1 rounded-lg hover:bg-primary">
                  Schedule Bot
                </Link>
              </li>
            </ul>
          )}
        </div>
      </section>
    );
};

export default Navbar;