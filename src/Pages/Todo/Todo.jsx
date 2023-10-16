import { useState } from "react";
import { BiDotsVerticalRounded, BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Loader from "../../Shared/Loader/Loader";
import useTodo from "../../Hooks/useTodo";
import UpdateTodo from "../../Modal/UpdateTodo";

const Todo = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [data, isLoading, refetch] = useTodo();
  const [openModal, setOpenModal] = useState(false); // State variable to manage modal visibility
  const [selectedTodo, setSelectedTodo] = useState(null); // Store the selected todo for editing

  // Upate status of checked
  const toggleCheck = async (todo) => {
    todo.isChecked = !todo.isChecked;
    await fetch(
      `https://do-bot-done-server-mrv9qmrx8-shazzadul-shakib.vercel.app/todos/${todo._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(todo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  const toggle = (id) => {
    // toggle that particular id if prevstate == false then false otherwise id will toggle true
    setIsOpen((prevState) => (prevState === id ? null : id));
  };

  if (isLoading) {
    return <Loader />;
  }
  // Toggle update modal
  const toggleModal = (todo) => {
    setOpenModal(!openModal);
    setSelectedTodo(todo);
    setIsOpen(null);
  };

  // Handle delete a particular item
  const handleDelete = (id) => {
    fetch(
      `https://do-bot-done-server-mrv9qmrx8-shazzadul-shakib.vercel.app/todos/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  return (
    <section>
      <div className="h-[75vh] md:h-[80vh] overflow-y-scroll bg-secondary rounded-xl p-4 text-bg">
        <div className="text-center">
          <h1 className="text-lg font-semibold uppercase">Tasks for Today</h1>
          <hr className="my-2" />
        </div>
        <div className="my-10">
          {data?.map((todo) => (
            <div
              className={`w-[90%] ml-1 md:mx-4 mb-4 py-2 px-4 bg-accent text-primary rounded-xl flex items-center relative`}
              key={todo._id}
            >
              <input
                className={`peer cursor-pointer appearance-none min-w-[16px] rounded-sm h-4 ${
                  todo.isChecked ? "bg-primary" : "bg-bg"
                } peer`}
                type="checkbox"
                onClick={() => toggleCheck(todo)}
                name="list"
                id="todo"
                defaultChecked={todo.isChecked}
              />
              <label className="text-lg mx-3 peer-checked:text-primary  peer-checked:line-through cursor-pointer ">
                {todo.todo}
              </label>
              <BiDotsVerticalRounded
                onClick={() => toggle(todo._id)}
                className="absolute right-2 text-lg cursor-pointer"
              />
              {isOpen === todo._id && (
                <div className="bg-accent absolute left-full ml-1 p-2 rounded-lg">
                  <BiSolidEdit
                    onClick={() => toggleModal(todo)}
                    className="mb-1 text-lg rounded cursor-pointer"
                  />
                  <MdDelete
                    onClick={() => handleDelete(todo._id)}
                    className="text-xl rounded cursor-pointer"
                  />
                </div>
              )}
            </div>
          ))}
          <div className={`text-center ${data?.length > 0 && "hidden"}`}>
            <h1>No Todos for today!</h1>
          </div>
        </div>
      </div>
      {/* Conditionally render the modal */}
      {openModal && (
        <div className="modal">
          <UpdateTodo
            todo={selectedTodo}
            closeModal={() => toggleModal(null)}
          />
        </div>
      )}
    </section>
  );
};

export default Todo;
