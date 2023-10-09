import React from "react";

function Todo_desc({ desc, setShowEditForm }) {
  return (
    <div className=" bg-gray-200 text-[.8rem] mx-2 px-1">
      {desc ? desc : <div>
         if you wish <span onClick={() => setShowEditForm(true)} className="text-[#8d2727d8] hover:text-[purple]">add a descreption</span>
        </div>}
    </div>
  );
}

export default Todo_desc;
