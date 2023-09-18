import img from '../../assets/profile.jpg';
import { BiLogOut } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import UpdateProfile from '../../Modal/UpdateProfile';

const ProfileCard = () => {
  const { user, logout } = useContext(AuthContext);
  const [openUpdateProfile,setOpenUpdateProfile]=useState(false);
  console.log(user);
 
  
  // Logout button handler
  const handleLogout=()=>{
    logout()
    .then(()=>{})
    .catch(()=>{})
  }

    return (
      <section className="">
        <div className="bg-secondary text-bg shadow-lg px-5 pt-10 py-5 rounded-xl ">
          {/* Visual Profile */}
          <div className=" flex items-center">
            {user.photoURL ? (
              <img
                className="w-16 h-16 rounded-full mr-3 border-2 border-bg"
                src={user?.photoURL}
                alt=""
              />
            ) : (
              <img
                className="w-16 h-16 rounded-full mr-3 border-2 border-bg"
                src={img}
                alt=""
              />
            )}
            <h2 className="text-xl font-medium">{user?.displayName}</h2>
          </div>
          {/* Bio section */}
          <div className="my-6 px-2 border rounded-lg p-2 border-bg">
            <p className="text-xs px-2">
              Never compare your limits, just push to the next level.
            </p>
          </div>
          {/* Personal Information section */}
          <div>
            <p>
              <span className="text-sm font-semibold  ">Phone:</span>
              <span className="text-xs pl-2 ">
                {user.phoneNumber ? user.phoneNumber : "N/A"}
              </span>
            </p>
            <p>
              <span className="text-sm font-semibold   ">Email:</span>
              <span className="text-xs pl-2 ">{user?.email}</span>
            </p>
            <p>
              <span className="text-sm font-semibold   ">Address:</span>
              <span className="text-xs pl-2 ">N/A</span>
            </p>
          </div>
          <hr className="my-4" />
          {/* Edit profile button */}
          <div className=" flex justify-end mt-4">
            <button
              onClick={() => setOpenUpdateProfile(true)}
              className=" flex items-center px-4 py-1 rounded-lg border border-bg mx-2 mt-6 text-xs"
            >
              <FiEdit className="mr-2" />
              Edit Info
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-1 rounded-lg bg-accent border border-accent text-primary hover:border hover:border-bg hover:bg-secondary hover:text-bg mx-2 mt-6 text-sm"
            >
              <BiLogOut className="mr-2" /> Logout
            </button>
          </div>
        </div>
        {openUpdateProfile && (
          <UpdateProfile onclose={()=>setOpenUpdateProfile(false)} />
        )}
      </section>
    );
};

export default ProfileCard;