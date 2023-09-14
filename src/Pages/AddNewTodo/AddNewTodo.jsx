import { DatePicker } from '@mui/x-date-pickers';
import React from 'react';
import { useForm } from 'react-hook-form';
import useTodo from '../../Hooks/useTodo';

const AddNewTodo = () => {
  const [data, isLoading, refetch] = useTodo();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
// use refetch fromn usequerry

  const onSubmit = (data) => {
    reset();
    
    // Send new todo to server
    fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // refetch after succesfully added the todo 
        refetch();
      });
   
  };
    return (
      // {/* add new todo to list container */}
      <div className=" border-4 border-bg bg-secondary h-[340px] rounded-xl p-4 md:p-8 mb-5 text-bg md:border-none">
        {/*add new todo headers */}
        <div className=" text-center">
          <h1 className="text-lg font-semibold">Add new todo</h1>
          <hr className="my-2" />
        </div>
        {/* add new todo */}
        <div className=" flex flex-col justify-center">
          {/* MUI date picker */}
          <DatePicker
            className="rounded-xl bg-accent "
            label="Select The Date"
            // value={value}
            // onChange={(newValue) => setValue(newValue)}
          />
          {/* Text-area */}
          <form onSubmit={handleSubmit(onSubmit)} className=" mt-4">
            <label className=" text-sm" htmlFor="todo">
              New todo
            </label>
            <textarea
              {...register("todo", { required: true })}
              className=" w-full rounded-xl mt-1 text-primary p-2 resize-none outline-none"
              name="todo"
              id=""
              cols="30"
              rows="3"
            ></textarea>
            <input
              className=" py-2 bg-accent w-full rounded-xl mt-2 text-secondary font-semibold"
              type="submit"
              value="ADD TODO"
            />
          </form>
        </div>
      </div>
    );
};

export default AddNewTodo;