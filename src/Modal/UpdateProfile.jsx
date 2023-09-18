import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import profile from '../assets/profile.jpg';
import { AiOutlineCloudUpload } from "react-icons/ai";
import { AuthContext } from "../Providers/AuthProvider";

const UpdateProfile = ({ onclose }) => {
    const{user}=useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // use refetch fromn usequerry
//   if (onclose) {
//     onclose();
//   }
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-primary bg-opacity-60 backdrop-blur-md">
      <div className=" bg-accent mx-3 pb-3 md:w-1/3 p-2 md:p-6 rounded-xl md:m-0">
        <form onSubmit={handleSubmit(onSubmit)} className=" mt-4 ">
          <div className=" mb-3 flex justify-center">
            <img
              className=" w-[90px] h-[90px] rounded-full border-2 border-bg"
              src={profile}
              alt=""
            />
          </div>
          <div className="mb-3 w-full border border-bg rounded-xl mt-1 text-primary p-2 outline-none text-sm text-center">
            <label
              htmlFor="image"
              className=" text-secondary text-sm  flex justify-center items-center"
            >
              <AiOutlineCloudUpload className="text-xl mr-2" />
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              name="image"
              id="image"
              {...register("image")}
              className=" hidden"
            />
          </div>
          <div className="mb-3">
            <label className=" text-sm text-secondary ">Update Bio</label>
            <textarea
              {...register("bio")}
              className=" w-full rounded-xl mt-1 text-primary p-4 resize-none outline-none text-lg"
              name="bio"
              defaultValue={user.bio || ""}
              id=""
              cols="30"
              rows="3"
            ></textarea>
          </div>
          <div className="mb-3">
            <label className=" text-sm text-secondary ">User Name</label>
            <input
              type="text"
              name="name"
              defaultValue={user.displayName}
              {...register("name", { required: true })}
              className=" w-full rounded-xl mt-1 text-primary p-2 outline-none text-sm"
            />
            {errors.name && (
              <p className="text-red text-xs mt-1">Name is required*</p>
            )}
          </div>
          <div className="mb-3">
            <label className=" text-sm text-secondary ">Phone Number</label>
            <input
              type="text"
              name="phone"
              defaultValue={user.phoneNumber || "N/A"}
              {...register("phone", { required: true })}
              className=" w-full rounded-xl mt-1 text-primary p-2 outline-none text-sm"
            />
            {errors.phone && (
              <p className="text-red text-xs mt-1">phone number is required*</p>
            )}
          </div>
          <div className="mb-3">
            <label className=" text-sm text-secondary ">Address</label>
            <input
              type="text"
              name="address"
              defaultValue={user.address || "N/A"}
              {...register("address", { required: true })}
              className=" w-full rounded-xl mt-1 text-primary p-2 outline-none text-sm"
            />
            {errors.address && (
              <p className="text-red text-xs mt-1">Address is required*</p>
            )}
          </div>

          <div className=" flex gap-6 ">
            <button
              onClick={onclose}
              className="border-2 border-secondary py-2 bg-accent w-full rounded-xl mt-2 text-secondary font-semibold"
            >
              Cancel
            </button>
            <input
              className=" py-2 bg-secondary w-full rounded-xl mt-2 text-bg font-semibold"
              type="submit"
              value="UPDATE"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
