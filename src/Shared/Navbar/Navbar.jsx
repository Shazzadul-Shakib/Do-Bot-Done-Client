import logo from '../../assets/Do-Bot-Done-logo.svg'
import { AiOutlineSearch } from "react-icons/ai";
import { FiSun, FiBell, FiPlus } from "react-icons/fi";

const Navbar = () => {
    return (
      <div>
        {/* Upper navbar section */}
        <div className="bg-bg flex justify-between items-center mx-8">
          {/* logo */}
          <div>
            <img className="h-14" src={logo} alt="" />
          </div>
          {/* Search bar */}
          <div className=" relative max-w-md">
            <div className=" absolute inset-y-0 pl-1 flex items-center pointer-events-none">
              <AiOutlineSearch className=" text-lg" />
            </div>
            <input
              className="block w-full py-1 pl-10 pr-4 rounded-lg border border-secondary focus:outline focus:outline-primary "
              type="text"
            />
          </div>
          {/* Icons for theme,notifications */}
          <div className=" flex">
            <FiSun className="text-xl mx-4"/>
            <FiBell className="text-xl mx-4"/>
            <FiPlus className="text-xl mx-4"/>
          </div>
        </div>
        {/* Lower navbar section contains navlinks */}
        <div></div>
      </div>
    );
};

export default Navbar;