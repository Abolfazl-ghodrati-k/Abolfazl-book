import React, { useEffect, useState } from "react";
import Todo_desc from "./Todo_desc";
import Todo_EditForm from "./Todo_EditForm";

function Todo_item({ Todo }) {
  const [ShowDesc, setShowDesc] = useState(false);
  const [ShowActions, setShowActions] = useState(false);
  const [ShowEditForm, setShowEditForm] = useState(false);
  const [Name, setName] = useState("");
  const [Desc, setDesc] = useState("");

  useEffect(() => {
    setName((Name) => (Name = Todo.name));
    console.log(Name);
  }, [useState]);

  const descriptionHandler = () => {
    setShowDesc(!ShowDesc);
  };
  return (
    <div className="flex flex-col w-full">
      <div
        className="flex justify-between items-center w-full"
        onMouseEnter={() => setShowActions(true)}
        onMouseLeave={() => setShowActions(false)}
      >
        <div
          onClick={() => descriptionHandler(Todo.desc)}
          className="w-full bg-gray-300 text-[white] rounded p-1 flex items-center justify-between m-1 text-[.85rem]"
        >
          <span>{Todo.title}</span>
          <span>{Todo.time}</span>
        </div>
        {ShowActions && (
          <span className="flex justify-start items-center [&>*]:px-1">
            <span
              onClick={() => {
                setShowEditForm(!ShowEditForm);
                setShowDesc(false);
              }}
            >
              edit
            </span>
            <span>delete</span>
          </span>
        )}
      </div>
      {ShowDesc && (
        <div className="w-full">
          <Todo_desc desc={Todo.desc} />
        </div>
      )}
      {ShowEditForm && (
        <Todo_EditForm
          name={Todo.name}
          onChangeName={(name) => setName(name)}
          onChangeDesc={(desc) => setDesc(desc)}
        />
      )}
    </div>
  );
}

export default Todo_item;
