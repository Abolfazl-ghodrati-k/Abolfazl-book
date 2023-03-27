import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function withTodos(Component, date) {
  return (props) => {
    const [todos, changeReturnValue] = useState(null);
    const [foundYears, setfoundYears] = useState(null)
    const database = useSelector((store) => store.todo.todos);

    useEffect(() => {
      order_todos_by_date();
    },[database]);

    function order_todos_by_date(date) {
      const found_years = find_years();
      const ordered_by_year = return_todos_by_year(found_years);
      const ordered_by_year_month = return_todos_by_year_month(ordered_by_year);
      changeReturnValue(ordered_by_year_month);
    }

    function find_years() {
      var found_years = [];
      database?.forEach((todo) => {
        if (found_years?.includes(todo?.year)) {
          return;
        } else {
          found_years?.push(todo?.year);
        }
      });
      found_years?.sort()
      setfoundYears(found_years)
      return found_years;
    }

    function find_months(this_years_todos) {
      var found_months = [];
      for (const todo in this_years_todos) {
        if (found_months?.includes(this_years_todos[todo]?.month)) {
          console.log(this_years_todos[todo]?.month);
        } else {
          found_months?.push(this_years_todos[todo]?.month);
        }
      }
      return found_months;
    }

    function return_todos_by_year(found_years) {
      const ordered_by_year = {};
      found_years?.forEach((year) => {
        database?.forEach((todo) => {
          if (todo?.year == year) {
            if (ordered_by_year[year]?.length) {
              const copy = ordered_by_year[year];
              ordered_by_year[year] = [...copy, { ...todo }];
            } else {
              ordered_by_year[year] = [{ ...todo }];
            }
          } else {
            return;
          }
        });
      });
      return ordered_by_year;
    }

    function return_todos_by_year_month(ordered_by_year) {
      const ordered_by_year_month = {};
      //   for (let index = 0; index < Object.keys(ordered_by_year)?.length; index++) {
      //     console.log("me")
      //   }
      for (const year in ordered_by_year) {
        const found_months = find_months(ordered_by_year[year]);
        found_months?.forEach((month) => {
          ordered_by_year[year]?.forEach((todo) => {
            // console.log(todo)

            if (todo?.month == month) {
              set(ordered_by_year_month, `${year}.${month}`, { ...todo });
            }
          });
        });
      }

      return ordered_by_year_month;
    }

    function set(obj, path, value) {
      var schema = obj; // a moving reference to internal objects within obj
      var pList = path.split(".");
      var len = pList.length;
      for (var i = 0; i < len - 1; i++) {
        var elem = pList[i];
        if (!schema[elem]) schema[elem] = {};
        schema = schema[elem];
      }
      var storedValue = schema[pList[len - 1]] ?? [];
      storedValue?.push(value);
      schema[pList[len - 1]] = storedValue;
    }

    return <Component foundYears={foundYears} todos={todos} {...props} />;
  };
}

export default withTodos;
