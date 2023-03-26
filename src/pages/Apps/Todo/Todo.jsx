import React, { useEffect, useState } from "react";
import Todo_title from "./Todo_title";
import Todo_welcome from "./Todo_welcome";
import "./style.css";
import Todo_form from "./Todo_form";
import Todo_container from "./Todo_container";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";

function Todo({ onClick }) {
  const [Width, setWidth] = useState(450);
  const [Height, setHeight] = useState(520);
  // const [ShowMessage, setShowMessage] = useState(true)
  // useEffect(() => {
  //   setTimeout(()=>{
  //     console.log(Date);
  //   },[1000])
  // });
  return (
    <Draggable
      defaultPosition={{ x: 50, y: 10 }}
      handle=".handletodo"
      defaultClassName="react-draggable todo"
      bounds="parent"
    >
      <Resizable
        minHeight={600}
        minWidth={480}
        defaultSize={{ width: Width, height: Height }}
        onResizeStop={(e, direction, ref, d) => {
          setWidth((Width) => Width + d.width);
          setHeight((Height) => Height + d.height);
        }}
      >
        <div className="p-2">
          <div
            className="bg-CMD rounded handletodo text-white p-3 flex flex-col items-start justify-start min-h-[600px] relative"
            onClick={onClick}
          >
            <Todo_welcome />
            <Todo_title />
            <Todo_form />
            <Todo_container />
          </div>
        </div>
      </Resizable>
    </Draggable>
  );
}

export default Todo;
