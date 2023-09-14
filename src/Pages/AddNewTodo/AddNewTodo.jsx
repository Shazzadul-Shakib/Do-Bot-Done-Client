import { DatePicker } from '@mui/x-date-pickers';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import useTodo from '../../Hooks/useTodo';
import { AuthContext } from '../../Providers/AuthProvider';

const AddNewTodo = ({ onAddSuccess }) => {
  const [data, isLoading, refetch] = useTodo();
  const {user}=useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.userEmail = user.email;
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
        reset();
        refetch();
        onAddSuccess();
      });
  };
  return (
    // {/* add new todo to list container */}
    <div className=" border-4 border-bg bg-secondary h-[320px] rounded-xl p-4 md:p-8 mb-5 text-bg md:border-none">
      {/*add new todo headers */}
      <div className=" text-center">
        <h1 className="text-lg font-semibold">Add new todo</h1>
        <hr className="my-2" />
      </div>
      {/* add new todo */}
      <div className=" flex flex-col justify-center z-0">
        {/* Text-area */}
        <form onSubmit={handleSubmit(onSubmit)} className=" mt-4">
         
          <textarea
            {...register("todo", { required: true })}
            className=" w-full rounded-xl my-3 text-primary p-2 resize-none outline-none"
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