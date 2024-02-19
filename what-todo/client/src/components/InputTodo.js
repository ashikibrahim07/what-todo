import React, { Fragment, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import "../styles/main.css";

const InputTodo = () => {
  const [description, setDescription] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      if (description.trim() !== "") {
        const body = { description };
        await fetch("http://localhost:8000/todos", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(body),
        });
        window.location = "/";
      } else {
        setShowAlert(true);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default InputTodo;
