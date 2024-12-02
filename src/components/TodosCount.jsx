import React from "react";

const TodosCount = ({ incompleteTodosCount }) => {
  return (
    <div className="count-text">
      You have {incompleteTodosCount}{" "}
      {incompleteTodosCount === 1 ? "todo" : "todos"} left to complete.
    </div>
  );
};

export default TodosCount;
