import img from '../../assets/profile.jpg';
import { BiLogOut } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import UpdateProfile from '../../Modal/UpdateProfile';

const ProfileCard = () => {
  const { user, logout } = useContext(AuthContext);
  const [openUpdateProfile,setOpenUpdateProfile]=useState(false);
  
  // Logout button handler
  const handleLogout=()=>{
    logout()
    .then(()=>{})
    .catch(()=>{})
  }

    return (
      <section className="">
        <div className="bg-secondary text-bg shadow-lg px-5 pt-10 py-5 rounded-xl ">
          <div className="">
            {/* Visual Profile */}
            <div className=" flex flex-col items-center mb-4">
                <img
                  className="w-[100px] h-[100px] rounded-full mr-3 border-2 border-bg mb-5"
                  src={user?.photoURL || img}
                  alt=""
                />
              <h2 className="text-2xl font-medium mb-2">{user?.displayName}</h2>
              <p className="text-xs pl-2 ">{user?.email}</p>
            </div>
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
          <UpdateProfile onclose={() => setOpenUpdateProfile(false)} />
        )}
      </section>
    );
};

export default ProfileCard;