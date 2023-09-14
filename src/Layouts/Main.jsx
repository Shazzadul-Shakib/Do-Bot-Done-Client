import React, { useState, useTransition } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import ProfileCard from "../Shared/ProfileCard/ProfileCard";
import Todo from "../Pages/Todo/Todo";
import AddNewTodo from "../Pages/AddNewTodo/addNewTodo";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Main = () => {
  const [createNewTodo, setCreateNewtodo] = useState(false);
  const toggleNewTodo = () => {
    setCreateNewtodo(!createNewTodo);
  };
  return (
    <div>
      <Navbar />
      <div className=" max-w-screen-2xl mx-auto bg-bg mt-8 overflow-hidden">
        <div className="flex mx-2 md:gap-4 ">
          <div className=" basis-[30%] h-[80vh] hidden md:block ">
            <ProfileCard />
          </div>
          <div className=" w-full md:basis-[43%]">
            <Todo />
          </div>
          <div className=" basis-[27%] h-[80vh] hidden md:block">
            <AddNewTodo />
          </div>
        </div>
        {/* Add new todo icon */}
        <div className=" flex justify-center mt-6 md:hidden">
          <AiOutlinePlusCircle
            onClick={toggleNewTodo}
            className=" text-6xl text-secondary"
          />
        </div>
        {createNewTodo && (
          <div className=" absolute bottom-16 mx-2 md:hidden">
            <AddNewTodo onAddSuccess={toggleNewTodo} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
