import React, { useEffect } from "react";

function Todo_EditForm({ name, onChangeName, onChangeDesc }) {
    useEffect(()=>{
        console.log(name)
    })
  return (
    <form className="flex flex-col mx-2 [&>*]:mb-1">
      <input
        type="text"
        value={name}
        onChange={(e) => onChangeName(e.target.value)}
        className="text-[.9rem] p-1 focus:outline-none bg-pink-100 rounded"
      />
      <textarea
        onChange={(e) => onChangeDesc(e.target.value)}
        className="h-[60px] p-1 rounded focus:outline-none bg-pink-100 resize-none text-[.8rem]"
      />
      <button>Submit</button>
    </form>
  );
}

export default Todo_EditForm;
