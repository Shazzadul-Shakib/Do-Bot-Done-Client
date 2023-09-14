import { useState } from "react";
import { BiDotsVerticalRounded, BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useQuery } from "react-query";
import Loader from "../../Shared/Loader/Loader";
import useTodo from "../../Hooks/useTodo";

const Todo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data,isLoading]=useTodo();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

 

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section>
      <div className="h-[75vh] md:h-[80vh] overflow-y-scroll bg-secondary rounded-xl p-4 text-bg">
        <div className="text-center">
          <h1 className="text-lg font-semibold">To-Do List for [4-9-2023]</h1>
          <hr className="my-2" />
        </div>
        <div className="my-10">
          {data.map((todo) => (
            <div
              className="w-[90%] ml-1 md:mx-4 mb-4 py-2 px-4 bg-accent text-primary rounded-xl flex items-center relative"
              key={todo._id}
            >
              <input className="w-4 h-4" type="checkbox" name="list" id="" />
              <span className="text-lg mx-3">{todo.todo}</span>
              <BiDotsVerticalRounded
                onClick={toggle}
                className="absolute right-2 text-lg cursor-pointer"
              />
              {isOpen && (
                <div className="bg-accent absolute left-full ml-1 p-2 rounded-lg">
                  <BiSolidEdit className="mb-1 text-lg rounded cursor-pointer" />
                  <MdDelete className="text-xl rounded cursor-pointer" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Todo;
