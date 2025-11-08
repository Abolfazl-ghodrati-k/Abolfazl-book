import { useSelector } from "react-redux";

export default function useOrder(AppList) {
  // @ts-expect-error TS(2339): Property 'order' does not exist on type 'unknown'.
  const Order = useSelector((state) => state.order.order);
  // @ts-expect-error TS(2339): Property 'fileManager' does not exist on type 'unk... Remove this comment to see the full error message
  const fileManager_Order = useSelector((state) => state.fileManager.order);
  // @ts-expect-error TS(2339): Property 'cmd' does not exist on type 'unknown'.
  const cmd_Order = useSelector((state) => state.cmd.order);
  // @ts-expect-error TS(2339): Property 'todo' does not exist on type 'unknown'.
  const todo_Order = useSelector((state) => state.todo.order);
  // @ts-expect-error TS(2339): Property 'calculator' does not exist on type 'unkn... Remove this comment to see the full error message
  const calculator_Order = useSelector((state) => state.calculator.order);
  // @ts-expect-error TS(2339): Property 'setting' does not exist on type 'unknown... Remove this comment to see the full error message
  const setting_Order = useSelector((state) => state.setting.order);
  // @ts-expect-error TS(2339): Property 'code' does not exist on type 'unknown'.
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
