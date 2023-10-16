import React from "react";
import { useForm } from "react-hook-form";
import useTodo from "../Hooks/useTodo";

const UpdateTodo = ({ todo, closeModal }) => {
  const [, isLoading, refetch] = useTodo();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // use refetch fromn usequerry

  const onSubmit = (data) => {
    fetch(
      `https://do-bot-done-server-mrv9qmrx8-shazzadul-shakib.vercel.app/todos/${todo._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        reset();
        refetch();
        closeModal();
      });
  };

  return (
    <div className="fixed inset-0 z-10 flex justify-center items-center bg-primary bg-opacity-60 backdrop-blur-md">
      <div className=" bg-accent p-2 mx-2 md:p-6 rounded-xl md:m-0">
        <form onSubmit={handleSubmit(onSubmit)} className=" mt-4 ">
          <label className=" text-md text-secondary " htmlFor="updateTodo">
            Update todo
          </label>
          <textarea
            {...register("updateTodo", { required: true })}
            className=" w-full rounded-xl mt-1 text-primary p-4 resize-none outline-none text-lg"
            name="updateTodo"
            defaultValue={todo.todo}
            id=""
            cols="30"
            rows="3"
          ></textarea>
          <div className=" flex gap-6 ">
            <button
              onClick={closeModal}
              className="border-2 border-secondary py-2 bg-accent w-full rounded-xl mt-2 text-secondary font-semibold"
            >
              Cancel
            </button>
            <input
              className=" py-2 bg-secondary w-full rounded-xl mt-2 text-bg font-semibold"
              type="submit"
              value="UPDATE TODO"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTodo;
