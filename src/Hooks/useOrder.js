import { useSelector } from "react-redux";

export default function useOrder(AppList) {
  const Order = useSelector((state) => state.order.order);
  const fileManager_Order = useSelector((state) => state.fileManager.order);
  const cmd_Order = useSelector((state) => state.cmd.order);
  const todo_Order = useSelector((state) => state.todo.order);
  const calculator_Order = useSelector((state) => state.calculator.order);
  const setting_Order = useSelector((state) => state.setting.order);
  const code_Order = useSelector((state) => state.code.order);

  const Orders = [
    { name: "FILE_MANAGER", order: fileManager_Order },
    { name: "CMD", order: cmd_Order },
    { name: "TODO", order: todo_Order },
    { name: "SETTING", order: setting_Order },
    { name: "CALCULATOR", order: calculator_Order },
    { name: "CODE", order: code_Order }
  ];
  // useEffect(()=> console.log('here'))
  return { Order, Orders };
}
