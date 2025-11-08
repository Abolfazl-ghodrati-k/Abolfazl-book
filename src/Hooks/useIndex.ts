import { useSelector } from "react-redux";

function useIndex() {
  // @ts-expect-error TS(2339): Property 'cmd' does not exist on type 'unknown'.
  const CMDIndex = useSelector((state) => state.cmd.order);
  // @ts-expect-error TS(2339): Property 'fileManager' does not exist on type 'unk... Remove this comment to see the full error message
  const FILE_MANAGERIndex = useSelector((state) => state.fileManager.order);
  // @ts-expect-error TS(2339): Property 'setting' does not exist on type 'unknown... Remove this comment to see the full error message
  const SETTINGIndex = useSelector((state) => state.setting.order);
  // @ts-expect-error TS(2339): Property 'calculator' does not exist on type 'unkn... Remove this comment to see the full error message
  const CALCULATORIndex = useSelector((state) => state.calculator.order);
  // @ts-expect-error TS(2339): Property 'todo' does not exist on type 'unknown'.
  const TODOIndex = useSelector((state) => state.todo.order);
  // @ts-expect-error TS(2339): Property 'code' does not exist on type 'unknown'.
  const CODEIndex = useSelector((state) => state.code.order);

  const Indexs = [
    { name: "CMD", zIndex: CMDIndex },
    { name: "FILE_MANAGER", zIndex: FILE_MANAGERIndex },
    { name: "SETTING", zIndex: SETTINGIndex },
    { name: "CALCULATOR", zIndex: CALCULATORIndex },
    { name: "TODO", zIndex: TODOIndex },
    { name: "CODE", zIndex: CODEIndex },
  ];

  const ChangeNumb = () => {
    Indexs.forEach((page, index) => {
      switch (page.zIndex) {
        case 1:
          Indexs[index].zIndex = 14;
          return Indexs;
        case 2:
          Indexs[index].zIndex = 13;
          return Indexs;
        case 3:
          Indexs[index].zIndex = 12;
          return Indexs;
        case 4:
          Indexs[index].zIndex = 11;
          return Indexs;
        case 5:
          Indexs[index].zIndex = 10;
          return Indexs;
        case 6:
          Indexs[index].zIndex = 1;
          return Indexs;
        default:
          return Indexs;
      }
    });
  };

  ChangeNumb();
  return Indexs;
}

export default useIndex;
