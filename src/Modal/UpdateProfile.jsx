import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";

const UpdateProfile = ({ onclose }) => {
    const { user, updateProfileInfo } = useContext(AuthContext);
    const [imageURL,setImageURL]=useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


   const onSubmit = async(data) => {
    // console.log(data)
    const formData=new FormData();
    formData.append("image", data?.image[0]);
     const response = await axios.post(
       "https://api.imgbb.com/1/upload?key=5253c30256b114e1a0e9185fe3cf6230",
       formData
     );
     const imageUrl = response.data.data.url;
     data.imageURL=imageUrl;
     await updateProfileInfo(data.name,data.imageURL)
     .then(()=>{
      onclose();
     })
     .catch(()=>{})
   };


  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-primary bg-opacity-60 backdrop-blur-md">
      <div className=" bg-accent mx-3 pb-3 md:w-1/3 p-2 md:p-6 rounded-xl md:m-0">
        <form onSubmit={handleSubmit(onSubmit)} className=" mt-4 ">
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
