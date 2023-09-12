import { DatePicker } from '@mui/x-date-pickers';
import React from 'react';

const AddNewTodo = () => {
    return (
        // {/* add new todo to list container */}
      <div className=" bg-secondary h-[340px] rounded-xl p-8 mb-5 text-bg">
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
            <label className=" text-sm" htmlFor="addTodo">
              New todo
            </label>
            <textarea
              className=" rounded-xl mt-1 text-primary p-2 resize-none outline-none"
              name="addTodo"
              id=""
              cols="30"
              rows="3"
            ></textarea>
            <input
              className=" py-2 bg-accent w-full rounded-xl mt-2 text-secondary font-semibold"
              type="submit"
              value="ADD TODO"
            />
          </div>
        </div>
      </div>
    );
};

export default AddNewTodo;