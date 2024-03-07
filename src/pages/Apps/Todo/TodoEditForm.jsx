import React from "react";
import DatePicker from "react-datepicker";
import useFunctions from "../../../Hooks/useFunctions";
import { toast } from "react-toastify";

function Todo_EditForm({ todo, desc, date,id , settodo, setdesc, setdate, setShowEditForm }) {
  const {update_todo} = useFunctions()

  function submitHandler(e) {
    e.preventDefault();
    update_todo(todo, desc, date, id);
    toast('todo edited successfully')
    setShowEditForm(false)
  }

  return (
    <form className="flex flex-col mx-2 [&>*]:mb-1 canceltodo" onSubmit={submitHandler}>
      <input
        value={todo}
        onChange={(e) => settodo(e.target?.value)}
        className="text-[.9rem] p-1 focus:outline-none bg-pink-100 rounded"
      />
      <textarea
        placeholder="write a note for your todo"
        value={desc}
        onChange={(e) => setdesc(e?.target.value)}
        className="h-[60px] p-1 rounded focus:outline-none bg-pink-100 resize-none text-[.8rem]"
      />
      <div className="max-w-[22%] ml-1">
        <DatePicker selected={date} onChange={(date) => setdate(date)} />
      </div>
      <button
        type="submit"
        className=" min-w-[100px] max-w-[150px] bg-pink rounded py-1 px-2 text-[white] mr-auto hover:bg-pink-200 hover:text-[black] transition-all duration-200"
      >
        Submit
      </button>
    </form>
  );
}

export default Todo_EditForm;
