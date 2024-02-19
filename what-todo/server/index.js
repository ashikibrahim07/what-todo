import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./db.js";

const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await db.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );

    res.status(201).json(newTodo.rows);
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Unable to create a todo");
  }
});

// Get all todos
app.get("/todos", async (req, res) => {
  const todos = await db.query("SELECT * FROM todo ORDER BY todo_id DESC");

  res.status(200).json(todos.rows);
});

// Get a todo
app.get("/todos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // Check if the todo exists
    const check = await db.query(
      "SELECT EXISTS (SELECT 1 FROM todo WHERE todo_id = $1)",
      [id]
    );
    if (!check.rows[0].exists) {
      return res.status(404).send("The ToDo is not available");
    }

    const todo = await db.query(
      "SELECT description FROM todo WHERE todo_id = $1",
      [id]
    );
    res.status(200).json(todo.rows);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
    return;
  }
});

// Update a todo
app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  try {
    // Check if the todo exists
    const check = await db.query(
      "SELECT EXISTS (SELECT 1 FROM todo WHERE todo_id = $1)",
      [id]
    );
    if (!check.rows[0].exists) {
      return res.status(404).send("The ToDo is not available");
    }
    // If todo available
    const todo = await db.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *",
      [description, id]
    );
    res.status(200).json(todo.rows);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
    return;
  }
});

// Delete a todo
app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // Check if the todo exists
    const check = await db.query(
      "SELECT EXISTS (SELECT 1 FROM todo WHERE todo_id = $1)",
      [id]
    );
    if (!check.rows[0].exists) {
      return res.status(404).send("The ToDo is not available");
    }
    // If todo available
    const todo = await db.query(
      "DELETE FROM todo WHERE todo_id = $1 RETURNING *",
      [id]
    );
    res
      .status(200)
      .json(`The todo "${todo.rows[0].description}" is deleted successfully!`);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
    return;
  }
});

// Port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Your server is listening at ${port}`);
});
