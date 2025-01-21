import React, { useState, Fragment } from "react";
import "../styles/main.css";

import pencilIcon from "../assets/icons/pencil-solid.svg";
import Tooltip from "@mui/material/Tooltip";

function EditTodo({ todo }) {
  const [description, setDescription] = useState(todo.description);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateDescription = (e) => {
    e.preventDefault();
    try {
      const updatedTodos = JSON.parse(localStorage.getItem("todos")) || [];
      const index = updatedTodos.findIndex(
        (item) => item.todo_id === todo.todo_id
      );
      if (index !== -1) {
        updatedTodos[index].description = description;
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        window.location.reload();
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <Tooltip title="Edit">
        <button
          type="button"
          className="edit"
          data-toggle="modal"
          data-target={`#id${todo.todo_id}`}
          onClick={() => setIsModalOpen(true)}
        >
          <img className="icon" src={pencilIcon} alt="pencil" />
        </button>
      </Tooltip>
      <div
        className={`modal fade ${isModalOpen ? "show" : ""}`}
        id={`id${todo.todo_id}`}
        onClick={(e) => setDescription(todo.description)}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!isModalOpen}
        style={{ display: isModalOpen ? "block" : "none" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Todo
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setIsModalOpen(false);
                  setDescription(todo.description);
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => {
                  setIsModalOpen(false);
                  setDescription(todo.description);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={updateDescription}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EditTodo;
