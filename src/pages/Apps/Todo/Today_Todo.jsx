import React, { useState } from "react";
import Todo_item from "./Todo_item";

function Today_Todo({ todo }) {
  return (
    <div className="w-full">
      <div
        className="cursor-pointer flex justify-between items-center w-full"
      >
        <Todo_item Todo={todo} />
      </div>
    </div>
  );
}

export default Today_Todo;
