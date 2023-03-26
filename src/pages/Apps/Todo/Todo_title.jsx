import React, { useEffect, useState } from "react";

function Todo_title() {
  const [myDate, setmyDate] = useState("");
  const [Clock, setClock] = useState("");

  function getDate() {
    const newDate = new Date();
    const year = newDate.getFullYear().toString();
    const day = newDate.getDate().toString();
    const month = new Intl.DateTimeFormat("en-US", { month: "numeric" }).format(
      newDate
    );
    const clock =
      newDate.getHours().toString() + ":" + newDate.getMinutes().toString();
    const date = year + " " + month + " " + day;
    setmyDate(date);
    setClock(clock);
  }

  useEffect(() => {
    const clock = setInterval(() => {
      getDate();
    }, 1000);
    return () => clearInterval(clock);
  });

  return (
    <div
      id="title"
      className="text-[.9rem] rounded border p-2 text-[pink] bg-CMD-200 flex justify-between items-center w-full"
    >
      <span>Abolfazl Todo</span>
      <p>
        {myDate &&
          myDate.split(" ").map((part, index) => {
            if (index == 2) {
              return part;
            } else {
              return part + " / ";
            }
          })}
      </p>
    </div>
  );
}

export default Todo_title;
