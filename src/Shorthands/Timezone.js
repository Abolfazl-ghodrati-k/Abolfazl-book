import React from "react";

function Timezone() {
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
    return { date, clock };
  }
  const { date, clock } = getDate();
  return (
    <div className="flex flex-col items-start justify-between text-white text-[12px]">
      <p>{clock}</p>
      <p>{date.split(" ").map((part, index) => {
        if(index==2){
            return part
        }else {
            return part+" / "
        }
      })}</p>
    </div>
  );
}

export default Timezone;
