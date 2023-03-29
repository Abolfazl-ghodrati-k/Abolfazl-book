import { v4 as uuidV4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_TODO } from "../redux/actionTypes";
import { formatDate } from "../services/date";

const useFunctions = () => {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  function add_todo(todo, date) {
    const { year, month, day, clock, wholeDate } = formatDate(date);
    var todosCopy;
    if (todos?.length) {
      todosCopy = [
        ...todos,
        { todo, year, month, day, clock, wholeDate, desc: "", id: uuidV4() },
      ];
    } else {
      todosCopy = [{ todo, year, month, day,clock, wholeDate, desc: "", id: uuidV4() }];
    }
    dispatch({ type: UPDATE_TODO, payload: todosCopy });
  }

  function update_todo(todo, desc, date, id) {
    const { year, month, day, clock, wholeDate } = formatDate(date);
    var todosCopy = todos.map((Todo) => {
      if (Todo?.id === id) {
        Todo.todo = todo;
        Todo.desc = desc;
        Todo.date = wholeDate;
        Todo.clock = clock;
        Todo.year = year;
        Todo.month = month;
        Todo.day = day;
        return Todo;
      } else {
        return Todo;
      }
    });
    dispatch({ type: UPDATE_TODO, payload: todosCopy });
  }

  function delete_todo(id) {
    var todosCopy = todos.filter((Todo) => Todo?.id !== id);
    dispatch({ type: UPDATE_TODO, payload: todosCopy });
  }
  
  return { add_todo, update_todo, delete_todo };
};

export default useFunctions;
