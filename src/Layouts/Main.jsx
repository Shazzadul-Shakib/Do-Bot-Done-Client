import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import ProfileCard from "../Shared/ProfileCard/ProfileCard";
import Todo from "../Pages/Todo/Todo";
import AddNewTodo from "../Pages/AddNewTodo/addNewTodo";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className=" max-w-screen-xl mx-auto bg-bg mt-8 overflow-hidden">
        <div className="flex mx-2 md:gap-4 ">
          <div className=" basis-[30%] h-[80vh] hidden md:block ">
            <ProfileCard />
          </div>
          <div className=" w-full md:basis-[45%]">
            <Todo />
          </div>
          <div className=" basis-[25%] h-[80vh] hidden md:block">
            <AddNewTodo />
          </div>
        </div>
      {/* Add new todo icon */}
      <div className=" flex justify-center mt-6 md:hidden">
        <AiOutlinePlusCircle className=" text-6xl text-secondary"/>
      </div>
      </div>
    </div>
  );
};

export default Main;
