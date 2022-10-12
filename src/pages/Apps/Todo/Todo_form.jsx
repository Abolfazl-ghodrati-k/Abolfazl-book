import React, { useState, useEffect } from "react";

function Todo_form() {
  const [Text, setText] = useState("");

  return (
    <div id="form" className="w-full mt-2  absolute bottom-2 left-0 px-2 bg-CMD">
      <div id="todo-title" className="flex justify-between items-center ">
        <input
          className="text-[black] text-left focus:outline-none rounded-lg text-[.8rem] py-1 pb-[.53rem] flex items-center pl-[5px] w-full"
          type="text"
          placeholder="ex: buy a cofee for abolfazl ---> pick a time (default is today)"
          value={Text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Todo_form;
