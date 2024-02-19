import React, { Fragment } from "react";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import Footer from "./components/Footer";
import "../src/styles/main.css";

function App() {
  return (
    <Fragment>
      <InputTodo />
      <ListTodos />
      <Footer />
    </Fragment>
  );
}

export default App;
