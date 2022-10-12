import React from "react";
import MacNav from "../../../Components/MacNav";

function Todo_welcome() {
  return (
    <div className="flex w-full justify-between items-center mb-3">
      <p className="text-[purple] text-[1.05rem]">Hope you enjoy 😁✌️</p>
      <div className="flex items-center">
        <MacNav type="MINIMIZE" Page={"TODO"} />
        <MacNav type="MAXIMIZE" Page={"TODO"} />
        <MacNav type="CLOSE" Page={"TODO"} />
      </div>
    </div>
  );
}

export default Todo_welcome;
