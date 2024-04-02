import { useState } from "react";
import { BsTrashFill, BsCheckSquare } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { formToggled, todoDeleted } from "../store/features/todo/todoSlice";

const TodoList = (props) => {
  const [toggleComplete, setToggleComplete] = useState(false); // State to toggle completion status
  const dispatch = useDispatch(); // useDispatch hook for dispatching actions

  return (
    <div className="d-flex justify-content-between" style={{ backgroundColor: '#F3D9E3', padding: '0.1rem', borderRadius: '0.375rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '98%', marginLeft: '1%', marginTop: '0rem' }}>
      <div>
        <h1
          className={toggleComplete ? "font-weight-bold text-decoration-line-through" : "font-weight-bold"}
          style={{ fontSize: '1.2em', paddingLeft: '0.5rem', paddingTop: '0.5rem' }}
        >
          {props.title}
        </h1>
      </div>
      <div className="d-flex align-items-center">
        <BsCheckSquare
          onClick={() => setToggleComplete(!toggleComplete)} // Toggle completion status on click
          className="cursor-pointer text-success me-3"
          size={20}
        />
        <FaEdit
          onClick={() => dispatch(formToggled({ id: props.id, title: props.title }))} // Dispatch action to toggle form for editing
          className="cursor-pointer text-warning me-3"
          size={20}
        />
        <BsTrashFill
          onClick={() => dispatch(todoDeleted(props.id))} // Dispatch action to delete todo
          className="cursor-pointer text-danger"
          size={20}
        />
      </div>
    </div>
  );
};

export default TodoList;
