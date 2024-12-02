import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import "../styles/main.css";

const InputTodo = () => {
  const [description, setDescription] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (description.trim() !== "") {
      try {
        const newTodo = {
          todo_id: new Date().getTime(),
          description,
        };

        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        todos.push(newTodo);
        localStorage.setItem("todos", JSON.stringify(todos));

        setDescription("");
        window.location.reload();
      } catch (err) {
        console.error(err.message);
      }
    } else {
      setShowAlert(true);
    }
  };

  return (
    <>
      <div className="box" id="heading">
        <h1>What Todo!?</h1>
      </div>
      <div className="box">
        <form className="item" onSubmit={onSubmitForm}>
          <input
            type="text"
            className="form-control"
            placeholder="What Todo!"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button className="add" type="submit">
            <AddIcon />
          </button>
        </form>
        {showAlert && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="warning" onClose={() => setShowAlert(false)}>
              Please enter a description!
            </Alert>
          </Stack>
        )}
      </div>
    </>
  );
};

export default InputTodo;
