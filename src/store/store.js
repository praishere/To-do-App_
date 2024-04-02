import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './features/todo/todoSlice'

// Configure the Redux store
const store= configureStore({
    reducer: {
        todos: todoReducer, // Combine the todoReducer into the store under the 'todos' key
    },
});

export default store;