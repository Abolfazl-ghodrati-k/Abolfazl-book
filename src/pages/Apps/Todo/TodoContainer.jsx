import React, { useCallback, useEffect, useState } from "react";
import withTodos from "../../../HOC/withTodos";
import TodoWrapper from "./TodoWrapper";
import YearWrapper from "./YearWrapper";
import { formatDate } from "../../../services/date";

function TodoContainer({ todos, foundYears }) {
  const [data, setdata] = useState(null);
  const { year, month, day } = formatDate();

  const findTodayTodos = useCallback(() => {
    var months;
    const thisYearData = foundYears?.map((Year) => {
      if (Year === year) {
        months = Object.keys(todos[year]);
        return todos[year];
      }
      return null;
    })[0];
    const thisMonthData = months?.map((Month) => {
      if (month === Month && thisYearData) {
        return thisYearData[Month];
      }
      return null;
    })[0];
    setdata(thisMonthData?.filter((monthTodos) => monthTodos?.day === day));
  }, [day, foundYears, month, todos, year]);

  useEffect(() => {
    findTodayTodos();
  }, [findTodayTodos, todos]);

  return (
    <div className="scrollbar overflow-y-scroll border absolute right-0 bottom-[3rem] left-0 top-[6rem] mx-2 mr-2 text-[black]  ">
      <div className="w-full mt-2">
        {data?.length > 0 && (
          <TodoWrapper todos_inMonth={data} month={"Today"} />
        )}

        {foundYears?.map((year) => {
          var months = Object.keys(todos[year]);
          return (
            <YearWrapper data={todos[year]} year={year} months={months} />
          );
        })}
      </div>
    </div>
  );
}

export default withTodos(TodoContainer, new Date());
