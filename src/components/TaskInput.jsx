import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit"; // Importing nanoid for generating unique IDs
import { useDispatch } from "react-redux";
import { todoAdded } from "../store/features/todo/todoSlice"; // Importing action creator for adding todo

const TaskInput = () => {
  const [input, setInput] = useState(""); // State for input value
  const dispatch = useDispatch(); // useDispatch hook for dispatching actions

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (/^\s*$/.test(input)) { // Check if input is empty or contains only whitespace
      alert("Enter a todo"); // Show alert if input is empty
      setInput(""); // Clear input field
      return; // Exit function
    } else {
      dispatch( // Dispatching action to add todo
        todoAdded({
          id: nanoid(), // Generate unique ID for todo
          title: input, // Set todo title to input value
        })
      );
      setInput(""); // Clear input field after adding todo
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row gx-3 align-items-center"> {/* Form for adding todo */}
      <div className="col-auto justify-content-center"> {/* Input field for todo */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} // Handle input change
          className="form-control mx-auto shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Add todo"
          style={{ backgroundColor: '#ADD8E6' }} // Set background color
        />
      </div>
      <div className="col-auto"> {/* Button for adding todo */}
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: '85px' }} // Set width of button
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TaskInput;
