import React, { useState } from "react";
import withTodos from "../../../HOC/withTodos";
import Todo_wrapper from "./Todo_wrapper";
import Year_wrapper from "./Year_wrapper";

function Todo_container({ todos, foundYears }) {
  return (
    <div className="scrollbar overflow-y-scroll border absolute right-0 bottom-[3rem] left-0 top-[6rem] mx-2 mr-2 text-[black]  ">
      <div className="w-full mt-2">
      {foundYears?.map((year) => {
        var months = Object.keys(todos[year])
         return <Year_wrapper data={todos[year]} year={year} months={months} />;
      })}
      </div>
    </div>
  );
}

export default withTodos(Todo_container, new Date());
