import { createSlice, nanoid } from "@reduxjs/toolkit";

// Define initial state for the todo slice
const initialState = {
  todos: [],        // Array to hold todo items
  toggleForm: true, // Boolean to toggle form visibility
  todoUpdate: {},   // Object to hold todo being updated
};

// Create the todo slice using createSlice function from Redux Toolkit
export const todoSlice = createSlice({
  name: "todo", // Name of the slice
  initialState, // Initial state defined above
  reducers: {
    // Reducer to toggle form visibility and update todo being edited
    formToggled: (state, action) => {
      console.log("formToggled reducer called");
      state.toggleForm = !state.toggleForm;
      state.todoUpdate = { ...state.todoUpdate, ...action.payload };
    },
    // Reducer to update an existing todo
    todoUpdated: (state, action) => {
      console.log("todoUpdated reducer called");
      // Find the todo to update
      const todoToUpdate = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      // Update the title of the found todo
      todoToUpdate.title = action.payload.title;
      // Toggle form visibility
      state.toggleForm = !state.toggleForm;
    },
    // Reducer to delete a todo
    todoDeleted: (state, action) => {
      console.log("todoDeleted reducer called");
      // Remove the todo from todos array
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // Reducer to clear all todos
    todosCleared: (state) => {
      console.log("todosCleared reducer called");
      // Clear the todos array
      state.todos = [];
    },
    // Reducer to add a new todo
    todoAdded: (state, action) => {
      console.log("todoAdded reducer called");
      // Add the new todo to todos array
      state.todos = [...state.todos, action.payload];
    },
  },
});

// Export action creators
export const {
  formToggled,
  todoDeleted,
  todosCleared,
  todoAdded,
  todoUpdated,
} = todoSlice.actions;

// Export the reducer function
export default todoSlice.reducer;
