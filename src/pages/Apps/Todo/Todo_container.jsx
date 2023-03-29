import React, { useEffect, useState } from "react";
import withTodos from "../../../HOC/withTodos";
import Todo_wrapper from "./Todo_wrapper";
import Year_wrapper from "./Year_wrapper";
import { formatDate } from "../../../services/date";

function Todo_container({ todos, foundYears }) {
  const [data, setdata] = useState(null);
  const { year, month } = formatDate();
  useEffect(() => {
    findTodayTodos();
  }, [todos]);

  function findTodayTodos() {
    var months;
    const thisYearData = foundYears?.map((Year) => {
      if (Year == year) {
        months = Object.keys(todos[year]);
        return todos[year];
      }
    })[0];
    const thisMonthData = months?.map((Month) => {
      if (month == Month) {
        return thisYearData[Month];
      }
    })[0];
    setdata(thisMonthData);
  }

  return (
    <div className="scrollbar overflow-y-scroll border absolute right-0 bottom-[3rem] left-0 top-[6rem] mx-2 mr-2 text-[black]  ">
      <div className="w-full mt-2">
        {data?.length && <Todo_wrapper todos_inMonth={data} month={"Today"} />}

        {foundYears?.map((year) => {
          var months = Object.keys(todos[year]);
          return (
            <Year_wrapper data={todos[year]} year={year} months={months} />
          );
        })}
      </div>
    </div>
  );
}

export default withTodos(Todo_container, new Date());
