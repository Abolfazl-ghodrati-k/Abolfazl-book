import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import useFunctions from "../../../Hooks/useFunctions";
import "react-datepicker/dist/react-datepicker.css";

function Todo_form() {
  const [startDate, setStartDate] = useState(new Date());
  const [Text, setText] = useState("");
  const {add_todo} = useFunctions()

  const TodoInput = useRef();

  function handleTodo(e) {
    setText(e?.target.value);
  }

  function handleEnter(e) {
    if (e.code === "Enter") {
      const value = TodoInput?.current.value;
      setText("");
      add_todo(value, startDate);
    }
  }

  useEffect(() => {
    TodoInput.current.addEventListener("keydown", handleEnter);
    return () =>
      TodoInput?.current?.removeEventListener("keydown", handleEnter);
  });

  return (
    <div id="form" className="w-full mt-2 absolute bottom-2 left-0 px-2 bg-CMD">
      <div
        id="todo-title"
        className="flex justify-between items-center max-w-full"
      >
        <input
          className="text-[black] text-left focus:outline-none rounded-lg text-[.8rem] py-[.5rem] flex items-center pl-[5px] w-full"
          type="text"
          placeholder="ex: buy a cofee for abolfazl --> pick a time (default is today)"
          ref={TodoInput}
          value={Text}
          onChange={handleTodo}
        />
        <div className="max-w-[22%] ml-1">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </div>
    </div>
  );
}

export default Todo_form;
