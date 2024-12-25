import React, { useState, useEffect } from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import Tooltip from "@mui/material/Tooltip";
import "../styles/main.css";
import EditTodo from "./EditTodo";
import TodosCount from "./TodosCount";
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
      showClass: {
        popup: "animate__animated animate__fadeIn animate__faster",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOut animate__faster",
      },
      customClass: {
        popup: "smooth-popup",
      },
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
          <Tooltip title="Completed">
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
    </div>
  );
};

export default ListTodos;
