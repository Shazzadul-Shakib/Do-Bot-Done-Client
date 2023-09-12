import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import ProfileCard from "../Shared/ProfileCard/ProfileCard";
import Todo from "../Pages/Todo/Todo";
import AddNewTodo from "../Pages/AddNewTodo/addNewTodo";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className=" max-w-screen-xl mx-auto bg-bg mt-8 overflow-hidden">
        <div className="flex gap-4 ">
          <div className=" basis-[30%] h-[80vh]">
            <ProfileCard />
          </div>
          <div className=" basis-[45%]">
            <Todo />
          </div>
          <div className=" basis-[25%] h-[80vh]">
            <AddNewTodo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
