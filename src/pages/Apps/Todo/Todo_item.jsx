import React, { useEffect, useState } from "react";
import Todo_desc from "./Todo_desc";
import Todo_EditForm from "./Todo_EditForm";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit3 } from "react-icons/fi";
import useFunctions from "../../../Hooks/useFunctions";
import { toast } from "react-toastify";

function Todo_item({ Todo }) {
  const [ShowDesc, setShowDesc] = useState(false);
  const [ShowActions, setShowActions] = useState(false);
  const [ShowEditForm, setShowEditForm] = useState(false);
  const [todo, settodo] = useState(Todo?.todo);
  const [desc, setdesc] = useState(Todo?.desc);
  const [date, setdate] = useState(Todo?.wholeDate);

  const {delete_todo} = useFunctions()

  const descriptionHandler = () => {
    setShowDesc(!ShowDesc);
  };

  function deleteHandler() {
    delete_todo(Todo?.id)
    toast("Todo deleted successfully")
  }

  return (
    <div className="flex flex-col w-full">
      <div
        className="flex justify-between items-center w-full"
        onMouseEnter={() => setShowActions(true)}
        onMouseLeave={() => setShowActions(false)}
      >
        <div
          onClick={() => descriptionHandler(Todo?.desc)}
          className="w-full bg-gradient-to-br bg-[#FFB4B4] from-[#B2A4FF] to-[#FFDEB4] text-[black] rounded p-1 flex items-center justify-between m-1 text-[.85rem]"
        >
          <span>{Todo?.todo}</span>
          <span>
            {Todo?.year}/ {Todo?.month}/ {Todo?.day}
          </span>
        </div>
        {ShowActions && (
          <span className="flex justify-start items-center [&>*]:px-1">
            <span
              onClick={() => {
                setShowEditForm(!ShowEditForm);
                setShowDesc(false);
              }}
              className="hover:bg-gray-200 p-1 rounded"
            >
              <FiEdit3 size={25} color="white" />
            </span>
            <span className="hover:bg-gray-200 p-1 rounded" onClick={deleteHandler}>
              <AiOutlineDelete size={25} color="white" />
            </span>
          </span>
        )}
      </div>
      {ShowDesc && !ShowEditForm && (
        <div className="w-full">
          <Todo_desc desc={Todo.desc} setShowEditForm={setShowEditForm} />
        </div>
      )}
      {ShowEditForm && (
        <Todo_EditForm
          todo={todo}
          desc={desc}
          date={date}
          id={Todo?.id}
          setdate={setdate}
          settodo={settodo}
          setdesc={setdesc}
          setShowEditForm={setShowEditForm}
        />
      )}
    </div>
  );
}

export default Todo_item;
