import { useSelector } from "react-redux";

function useIndex() {
  const CMDIndex = useSelector((state) => state.cmd.order);
  const FILE_MANAGERIndex = useSelector((state) => state.fileManager.order);
  const SETTINGIndex = useSelector((state) => state.setting.order);
  const CALCULATORIndex = useSelector((state) => state.calculator.order);
  const TODOIndex = useSelector((state) => state.todo.order);
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
