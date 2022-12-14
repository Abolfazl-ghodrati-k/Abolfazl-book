import React from "react";
import { useSelector } from "react-redux";

function useIndex() {
  const CMDIndex = useSelector((state) => state.cmd.order);
  const FILE_MANAGERIndex = useSelector((state) => state.fileManager.order);
  const SETTINGIndex = useSelector((state) => state.setting.order);

  const Indexs = [
    { name: "CMD", zIndex: CMDIndex },
    { name: "FILE_MANAGER", zIndex: FILE_MANAGERIndex },
    { name: "SETTING", zIndex: SETTINGIndex }
  ];

  const ChangeNumb = () => {
    Indexs.forEach((page, index) => {
      switch (page.zIndex) {
        case 1:
          Indexs[index].zIndex = 1000;
          return Indexs;
        case 2:
          Indexs[index].zIndex = 100;
          return Indexs;
        case 3:
          Indexs[index].zIndex = 10;
          return Indexs;
        case 4:
          Indexs[index].zIndex = 1;
          return Indexs;
      }
    });
    // console.log("indexes : ",Indexs);
  };
  ChangeNumb();
  return Indexs;
}

export default useIndex;
