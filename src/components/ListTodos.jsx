import React, { useState, useEffect } from "react";
import "../styles/main.css";

import EditTodo from "./EditTodo";
import TodosCount from "./TodosCount";

import DoneAllIcon from "@mui/icons-material/DoneAll";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    try {
      const updatedTodos = todos.filter((todo) => todo.todo_id !== id);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setTodos(updatedTodos);
    } catch (err) {
      console.error(err.message);
    }
  };

  const clearAllTodos = () => {
    Swal.fire({
      title: "Confirm Clear All",
      text: "Are you sure you want to clear all tasks?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, clear all!",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("todos");
        setTodos([]);
        Swal.fire("Cleared!", "All tasks have been cleared.", "success");
      }
    });
  };

  const getTodos = () => {
    try {
      const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
      setTodos(storedTodos);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const incompleteTodosCount = todos.filter((todo) => !todo.completed).length;

  const handleCompleteClick = (id) => {
    Swal.fire({
      title: "Confirm Completion",
      text: "Are you sure you want to mark this todo as completed?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, complete it!",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTodo(id);
        Swal.fire(
          "Completed!",
          "The todo has been marked as completed.",
          "success"
        );
      }
    });
  };

  if (todos.length === 0) {
    return (
      <div className="todo-list">
        Your todo list is empty. Add a task and get started!
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo.todo_id} className="todo-item">
          <Tooltip title="Mark as Completed">
            <button
              type="button"
              className="complete"
              onClick={() => handleCompleteClick(todo.todo_id)}
            >
              <DoneAllIcon style={{ color: "green" }} />
            </button>
          </Tooltip>
          <span className="todo-description">{todo.description}</span>
          <EditTodo todo={todo} />
        </div>
      ))}
      <TodosCount incompleteTodosCount={incompleteTodosCount} />
      <Button variant="contained" onClick={clearAllTodos} className="clearAll">
        Clear All Tasks
      </Button>
    </div>
  );
};

export default ListTodos;
