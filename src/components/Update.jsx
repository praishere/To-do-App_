import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoUpdated } from "../store/features/todo/todoSlice";

const Update = () => {
  const dispatch = useDispatch(); // useDispatch hook for dispatching actions
  const todoToUpdate = useSelector((state) => state.todos.todoUpdate); // Selecting the todo to update from the Redux store
  const [update, setUpdate] = useState(todoToUpdate.title); // State to hold the updated todo title

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^\s*$/.test(update)) {
      alert("Enter a todo");
      setUpdate("");
      return;
    } else {
      dispatch(
        todoUpdated({
          id: todoToUpdate.id, // Updating the todo with its id
          title: update, // New title for the todo
        })
      );
      setUpdate(""); // Clearing the input field after updating
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row gx-3 align-items-center">
      <div className="col-auto">
        <input
          type="text"
          value={update}
          onChange={(e) => setUpdate(e.target.value)}
          className="form-control shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-zinc-200"
          placeholder="Update"
        />
      </div>
      <div className="col-auto">
        <button
          type="submit"
          className="btn btn-warning"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default Update;
