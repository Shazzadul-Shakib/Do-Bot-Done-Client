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

  if (isLoading) {
    return <Loader />;
  }
  const toggle = (id) => {
    // toggle that particular id if prevstate == false then false otherwise id will toggle true
    setIsOpen((prevState) => (prevState === id ? null : id));
  };
  // Toggle update modal
  const toggleModal = (todo) => {
    setOpenModal(!openModal);
    setSelectedTodo(todo);
    setIsOpen(null);
  };

  // Handle delete a particular item
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };

  return (
    <section>
      <div className="h-[75vh] md:h-[80vh] overflow-y-scroll bg-secondary rounded-xl p-4 text-bg">
        <div className="text-center">
          <h1 className="text-lg font-semibold">To-Do List for [4-9-2023]</h1>
          <hr className="my-2" />
        </div>
        <div className="my-10">
          {data?.map((todo) => (
            <div
              className="w-[90%] ml-1 md:mx-4 mb-4 py-2 px-4 bg-accent text-primary rounded-xl flex items-center relative"
              key={todo._id}
            >
              <input className="w-4 h-4" type="checkbox" name="list" id="" />
              <span className="text-lg mx-3">{todo.todo}</span>
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
          <div className={`text-center ${data.length>0 && "hidden"}`}>
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
