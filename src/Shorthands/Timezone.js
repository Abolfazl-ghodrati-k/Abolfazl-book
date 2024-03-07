import React, { useEffect, useState } from "react";
import { formatDate } from "../services/date";

function Timezone() {

  const [myDate, setmyDate] = useState("")
  const [Clock, setClock] = useState("")

  function getDate() {
    const {date,clock} = formatDate()
    setmyDate(date)
    setClock(clock)
  }

  useEffect(() => {
    const clock = setInterval(() => {
      getDate();
    },1000)
    return () => clearInterval(clock)
  })

  return (
    <div className="flex flex-col items-start justify-between text-white text-[12px]">
      <p>{Clock && Clock}</p>
      <p>
        {myDate && myDate.split(" ").map((part, index) => {
          if (index === 2) {
            return part;
          } else {
            return part + " / ";
          }
        })}
      </p>
    </div>
  );
}


export default Timezone;
