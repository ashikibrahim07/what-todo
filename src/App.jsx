import React from "react";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import Footer from "./components/Footer";
import "../src/styles/main.css";

function App() {
  return (
    <>
      <InputTodo />
      <ListTodos />
      <Footer />
    </>
  );
}

export default App;
