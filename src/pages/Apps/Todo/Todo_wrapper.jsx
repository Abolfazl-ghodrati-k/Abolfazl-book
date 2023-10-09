import React, { useState } from "react";
import Today_Todo from "./Today_Todo";

function Todo_wrapper({ todos_inMonth, month }) {
  const [ShowTodayTasks, setShowTodayTasks] = useState(false);
  const [Month, setMonth] = useState(() => {
    if (month === "Today") {
      return "Today";
    } else {
      const newDate = new Date(0, month, 0);
      return new Intl.DateTimeFormat("en-US", { month: "long" }).format(
        newDate
      );
    }
  });

  return (
    <>
      <div
        className="cursor-pointer text-smoke bg-[#FDF7C3] bg-gradient-to-r from-[#FDF7C3] to-[#FFDEB4] p-1 relative"
        onClick={() => {
          setShowTodayTasks(!ShowTodayTasks);
        }}
      >
        {ShowTodayTasks ? "Close " + Month : Month}
      </div>
      <div className={`${month == "Today" ? "" : "year-wrapper"}`}>
        {ShowTodayTasks &&
          todos_inMonth?.map((todo) => <Today_Todo todo={todo} />)}
      </div>
    </>
  );
}

export default Todo_wrapper;
