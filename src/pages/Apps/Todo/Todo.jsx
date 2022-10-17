import React, { useEffect,useState } from "react";
import Todo_title from "./Todo_title";
import Todo_welcome from "./Todo_welcome";
import "./style.css";
import Todo_form from "./Todo_form";
import Todo_container from "./Todo_container";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";

function Todo() {
  const [Width, setWidth] = useState(450);
  const [Height, setHeight] = useState(520);
  // const [ShowMessage, setShowMessage] = useState(true)
  // useEffect(() => {
  //   setTimeout(()=>{
  //     console.log(Date);
  //   },[1000])
  // });
  return (
    <Draggable defaultPosition={{ x: 50, y: 10 }}>
      <Resizable
        defaultSize={{ width: Width, height: Height }}
        onResizeStop={(e, direction, ref, d) => {
          setWidth((Width) => Width + d.width);
          setHeight((Height) => Height + d.height);
        }}
      >
        <div className="bg-CMD rounded text-white p-3 flex flex-col items-start justify-start">
          <Todo_welcome />
          <Todo_title />
          <Todo_form />
          <Todo_container />
        </div>
      </Resizable>
    </Draggable>
  );
}

export default Todo;
