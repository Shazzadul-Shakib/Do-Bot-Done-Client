import img from '../../assets/profile.jpg';
import { FaSquareFacebook, FaSquareGithub } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";

const ProfileCard = () => {
    return (
      <div className=" bg-secondary text-bg shadow-lg px-6 pt-10 py-5 rounded-xl w-5/6 ">
        {/* Visual Profile */}
        <div className=" flex items-center">
          <img
            className="w-16 h-16 rounded-full mr-6 border-2 border-bg"
            src={img}
            alt=""
          />
          <h2 className="text-xl font-bold">Shazzadul Islam Shakib</h2>
        </div>
        {/* Bio section */}
        <div className="my-6 w-2/3 border rounded-lg p-2 border-bg">
          <p className="text-sm">
            Never compare your limits, just push to the next level.
          </p>
        </div>
        {/* Personal Information section */}
        <div>
          <p>
            <span className="text-sm font-semibold  ">Phone:</span>{" "}
            <span className="text-xs  ">01760274562</span>
          </p>
          <p>
            <span className="text-sm font-semibold   ">Email:</span>{" "}
            <span className="text-xs  ">shakib1186@gmail.com</span>
          </p>
          <p>
            <span className="text-sm font-semibold   ">Address:</span>{" "}
            <span className="text-xs  ">347/3A, East kazipara</span>
          </p>
        </div>
        <hr className="my-4" />
        {/* Personal Social links with icons */}
        <div>
          <div className="flex items-center">
            <FaSquareFacebook className=" text-lg rounded-lg  mr-4 mb-2" />
            <a href="" className="text-sm">
              Shazzadul Islam Shakib
            </a>
          </div>
          <div className="flex items-center">
            <FaSquareGithub className=" text-lg rounded-lg mr-4" />
            <a href="" className="text-sm">
              Shazzadul-Shakib
            </a>
          </div>
        </div>
        {/* Edit profile button */}
        <div className=" flex justify-end">
          <button className=" flex items-center px-4 py-1 rounded-lg border border-bg mx-2 mt-6 text-sm">
            <FiEdit className="mr-2" />
            Edit Info
          </button>
          <button className="flex items-center px-4 py-1 rounded-lg bg-accent border border-accent text-primary hover:border hover:border-bg hover:bg-secondary hover:text-bg mx-2 mt-6 text-md">
            <BiLogOut className="mr-2" /> Logout
          </button>
        </div>
      </div>
    );
};

export default ProfileCard;