import React from "react";
import MacNav from "../../../Components/MacNav";
import { useSelector } from "react-redux";

function TodoWelcome() {
  // @ts-expect-error TS(2339): Property 'todo' does not exist on type 'unknown'.
  const { isMaximized } = useSelector((store) => store.todo);
  return (
    <div className="flex w-full justify-between items-center mb-3">
      <p className="text-[purple] text-[1.05rem]">Abolfazl Todo 😁✌️</p>
      <div className="flex items-center">
        <MacNav type="MINIMIZE" name={"TODO"} isMaximized={isMaximized} />
        <MacNav type="CLOSE" name={"TODO"} isMaximized={isMaximized} />
      </div>
    </div>
  );
}

export default TodoWelcome;
