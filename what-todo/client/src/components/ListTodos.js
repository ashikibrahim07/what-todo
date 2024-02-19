import React, { Fragment, useState, useEffect } from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import Tooltip from "@mui/material/Tooltip";
import "../styles/main.css";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:8000/todos/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:8000/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.todo_id} className="todo-item">
            <Tooltip title="Completed">
              <button
                type="button"
                className="complete"
                onClick={() => deleteTodo(todo.todo_id)}
              >
                <DoneAllIcon style={{ color: "green" }} />
              </button>
            </Tooltip>
            <span className="todo-description">{todo.description}</span>
            <EditTodo todo={todo} />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ListTodos;
