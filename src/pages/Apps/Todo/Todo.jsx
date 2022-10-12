import React, { useEffect } from "react";
import Todo_title from "./Todo_title";
import Todo_welcome from "./Todo_welcome";
import "./style.css";
import Todo_form from "./Todo_form";
import Todo_container from "./Todo_container";

function Todo() {
  useEffect(() => {
    // setInterval(()=>{
    //   console.log(Date);
    // },[1000])
  });
  return (
    <div className="min-w-[450px] min-h-[520px] bg-CMD rounded text-white p-3 flex flex-col items-start justify-start absolute top-2 left-2 ">
      <Todo_welcome />
      <Todo_title />
      <Todo_form />
      <Todo_container />
    </div>
  );
}

export default Todo;
