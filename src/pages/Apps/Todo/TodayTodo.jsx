import React from "react";
import TodoItem from "./TodoItem";

function TodayTodo({ todo }) {
  return (
    <div className="w-full">
      <div
        className="cursor-pointer flex justify-between items-center w-full"
      >
        <TodoItem Todo={todo} />
      </div>
    </div>
  );
}

export default TodayTodo;
