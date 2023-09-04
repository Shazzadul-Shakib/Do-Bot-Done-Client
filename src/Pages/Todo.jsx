import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { BiDotsVerticalRounded, BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";


const Todo = () => {
  // Toggle menubar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen); //todo make custom hook to toggle
  };

  return (
    <section className="min-h-screen w-2/3 flex flex-row-reverse justify-between gap-10">
      {/* add new todo to list container */}
      <div className=" bg-secondary w-2/5 h-[340px] rounded-xl p-8 mb-5 text-bg">
        {/*add new todo headers */}
        <div className=" text-center">
          <h1 className="text-lg font-semibold">Add new todo</h1>
          <hr className="my-2" />
        </div>
        {/* add new todo */}
        <div>
            {/* MUI date picker */}
          <DatePicker
          className="rounded-xl bg-accent "
            label="Select The Date"
            // value={value}
            // onChange={(newValue) => setValue(newValue)}
          />
          {/* Text-area */}
          <div className=" mt-4">
            <label className=" text-sm" htmlFor="addTodo">New todo</label>
            <textarea className=" rounded-xl mt-1 text-primary p-2 resize-none outline-none" name="addTodo" id="" cols="30" rows="3"></textarea>
            <input className=" py-2 bg-accent w-full rounded-xl mt-2 text-secondary font-semibold" type="submit" value="ADD TODO" />
          </div>
        </div>
      </div>
      {/* List shown container */}
      <div className=" h-full w-3/5 bg-secondary rounded-xl p-4 text-bg">
        {/* Todo headers */}
        <div className=" text-center">
          <h1 className="text-lg font-semibold">
            To-Do List for [ 4-9-2023 ]{" "}
          </h1>
          <hr className="my-2" />
        </div>
        {/* Todo lists */}
        <div className=" my-10">
          <div className=" mx-4 mb-4 py-2 px-4 bg-accent text-primary rounded-xl flex items-center relative">
            <input
              className=" w-4 h-4 rounded"
              type="checkbox"
              name="list"
              id=""
            />
            <span className=" text-lg ml-3">This work to be done </span>
            <BiDotsVerticalRounded
              onClick={toggle}
              className=" absolute right-2 text-lg cursor-pointer"
            />
            {/* Delete and edit list */}
            {isOpen && (
              <div className=" bg-accent absolute left-full ml-1 p-2 rounded-lg">
                <BiSolidEdit className="mb-1 text-lg rounded cursor-pointer" />
                <MdDelete className="text-xl rounded  cursor-pointer" />
              </div>
            )}
          </div>
          <div className=" mx-4 mb-4 py-2 px-4 bg-accent text-primary rounded-xl flex items-center relative">
            <input
              className=" w-4 h-4 rounded"
              type="checkbox"
              name="list"
              id=""
            />
            <span className=" text-lg ml-3">This work to be done </span>
            <BiDotsVerticalRounded
              onClick={toggle}
              className=" absolute right-2 text-lg cursor-pointer"
            />
            {/* Delete and edit list */}
            {isOpen && (
              <div className=" bg-accent absolute left-full ml-1 p-2 rounded-lg">
                <BiSolidEdit className="mb-1 text-lg rounded cursor-pointer" />
                <MdDelete className="text-xl rounded  cursor-pointer" />
              </div>
            )}
          </div>
          <div className=" mx-4 mb-4 py-2 px-4 bg-accent text-primary rounded-xl flex items-center relative">
            <input
              className=" w-4 h-4 rounded"
              type="checkbox"
              name="list"
              id=""
            />
            <span className=" text-lg ml-3">This work to be done </span>
            <BiDotsVerticalRounded
              onClick={toggle}
              className=" absolute right-2 text-lg cursor-pointer"
            />
            {/* Delete and edit list */}
            {isOpen && (
              <div className=" bg-accent absolute left-full ml-1 p-2 rounded-lg">
                <BiSolidEdit className="mb-1 text-lg rounded cursor-pointer" />
                <MdDelete className="text-xl rounded  cursor-pointer" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Todo;