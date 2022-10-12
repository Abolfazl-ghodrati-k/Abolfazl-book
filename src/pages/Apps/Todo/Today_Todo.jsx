import React,{useState} from "react";
import Todo_item from "./Todo_item";

function Today_Todo() {
  const Todos = [
    { title: "name1", id: 1, time: "05:02", desc: "" },
    { title: "name1", id: 2, time: "05:02", desc: "dcd"        },
    { title: "name1", id: 3, time: "05:02", desc: "df"         },
    { title: "name1", id: 4, time: "05:02", desc: "fv"         },
    { title: "name1", id: 5, time: "05:02", desc: "dvfv"       },
    { title: "name1", id: 6, time: "05:02", desc: "sdvf"       },
    { title: "name1", id: 7, time: "05:02", desc: "sdv"        },
    { title: "name1", id: 8, time: "05:02", desc: ""        },
  ];
  return (
    <div className="w-full">
      {Todos.map((Todo) => {
        return (
          <div
            key={Todo.id}
            className="cursor-pointer flex justify-between items-center w-full"
            
          >
            <Todo_item Todo={Todo} />
            
          </div>
        );
      })}
    </div>
  );
}

export default Today_Todo;
