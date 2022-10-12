import React from "react";

function Todo_desc({ desc }) {
  return (
    <div className=" bg-gray-200 text-[.8rem] mx-2 px-1">
      {desc ? desc : <div>
         if you wish <span className="hover:text-[purple]">add a descreption</span>
        </div>}
    </div>
  );
}

export default Todo_desc;
