import { useState } from "react";
import TaskInput from "./TaskInput";  //importing the taskInput component
import Update from "./Update";  // importing Update
import Tasklist from "./TodoList"; //Importing TaskList

import { useSelector, useDispatch } from "react-redux";
import { todosCleared } from "../store/features/todo/todoSlice";

import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

const Card = () => {  // Card component declaration
  const toggle = useSelector((state) => state.todos.toggleForm); // Toggle state from Redux store
  const myTodos = useSelector((state) => state.todos.todos);  //To hold the todos from Redux store

  const dispatch = useDispatch(); // useDispatch hook for dispatching actions

  return (
    <div className="container mt-5 mx-n10 my-auto">
      {toggle ? (
        <div className="card w-50 h-75 min-h-max bg-amber-100 shadow-2xl r
        ounded-lg p-3 items-center flex flex-col justify-between" style={{ marginTop: '-90px' }}>
        <h1 className="display-5 font-weight-bold mb-4 text-center" style={{ textDecoration: 'underline', fontSize: '2rem' }}>
  My Todo List
</h1>


          <div className="w-100">
            {toggle ? <TaskInput /> : <Update/>}
          </div>
          {myTodos.length !== 0 ? (
            <ul className="list-group mt-4">
              {myTodos.map((todo) => (
                <li className="list-group-item" key={todo.id}>
                  <Tasklist title={todo.title} id={todo.id} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center mt-4">
              <h1 className="text-2xl">Enter your first todo item</h1>
              <BsFillCheckCircleFill
                size={50}
                className="text-success mt-3"
              />
            </div>
          )}
  <div style={{ position: 'absolute', right:'10px', bottom: '15px', width: '100%', display: 'flex', justifyContent: 'center' }} className="text-center">
  <button
    type="button"
    className="btn btn-danger btn-sm py-2"
    style={{ width: '100px' }}
    onClick={() => {
      dispatch(todosCleared());
    }}
  >
    Clear
  </button>
</div>
        </div>
      ) : (
        <div className="card w-50 h-75 min-h-max bg-amber-100 shadow-2xl rounded-lg p-4 items-center flex flex-col justify-between">
          <h1 className="display-5 font-weight-bold mb-4 text-center" style={{ textDecoration: 'underline', fontSize: '2rem' }}>
            My Todo List for Today
          </h1>
          <div className="w-100">
            <Update/>
            <div className="text-center mt-4">
              <h1 className="text-2xl">Edit your todo item</h1>
              <FaEdit size={50} className="text-success mt-3" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
