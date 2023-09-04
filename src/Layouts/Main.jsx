import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import ProfileCard from "../Shared/ProfileCard/ProfileCard";
import Todo from "../Pages/Todo/Todo";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className=" max-w-screen-xl mx-auto bg-bg mt-8">
        <div className="flex">
          <ProfileCard />
          <Todo />
        </div>
      </div>
    </div>
  );
};

export default Main;
