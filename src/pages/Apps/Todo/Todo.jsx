import React, { useState } from "react";
import TodoTitle from "./TodoTitle";
import TodoWelcome from "./TodoWelcome";
import TodoForm from "./TodoForm";
import TodoContainer from "./TodoContainer";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";

function Todo({ onClick }) {
  const [Width, setWidth] = useState(450);
  const [Height, setHeight] = useState(520);

  return (
    <Draggable
      defaultPosition={{ x: 50, y: 10 }}
      handle=".handletodo"
      cancel=".canceltodo"
      defaultClassName="react-draggable todo"
      bounds="parent"
    >
      <Resizable
        minHeight={500}
        minWidth={480}
        defaultSize={{ width: Width, height: Height }}
        onResizeStop={(e, direction, ref, d) => {
          setWidth((Width) => Width + d.width);
          setHeight((Height) => Height + d.height);
        }}
      >
        <div className="p-2">
          <div
            className="bg-CMD rounded handletodo min-h-[500px] text-white p-3 flex flex-col items-start justify-start  relative"
            onClick={onClick}
          >
            <TodoWelcome />
            <TodoTitle />
            <TodoForm />
            <TodoContainer />
          </div>
        </div>
      </Resizable>
    </Draggable>
  );
}

export default Todo;
