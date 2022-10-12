import React, { useState } from "react";
import Today_Todo from "./Today_Todo";

function Todo_container() {
  const [ShowTodayTasks, setShowTodayTasks] = useState(false);
  return (
    <div className="overflow-y-auto border absolute right-0 bottom-[3rem] left-0 top-[6rem] mx-2 mr-2 text-[black]  ">
      <div
        className="cursor-pointer text-smoke bg-gray p-1"
        onClick={() => {
          setShowTodayTasks(!ShowTodayTasks);
        }}
      >
        {ShowTodayTasks ? "Close " : "Today tasks"}
      </div>
      {ShowTodayTasks && <Today_Todo />}
    </div>
  );
}

export default Todo_container;
