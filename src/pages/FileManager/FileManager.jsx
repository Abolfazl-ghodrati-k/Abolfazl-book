import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";
import { useNavigate } from "react-router";

import "./style.css";
import MacNav from "../../Components/MacNav";
import Disks from "./Components/Disks";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function FileManager({ zIndex, onClick }) {
  // ***************************************** STATE ***********************
  const [Width, setWidth] = useState(900);
  const [Height, setHeight] = useState(500);
  const [PositionX, setPositionX] = useState(40);
  const [PositionY, setPositionY] = useState(40);
  const navigate = useNavigate();
  const { isMaximized } = useSelector((store) => store.fileManager);

  useEffect(() => {
    if (isMaximized) {
      setPositionX(0);
      setPositionY(0);
    }
  }, [isMaximized]);

  return (
    <Draggable
      bounds={"parent"}
      handle=".handleFileManager"
      defaultClassName="react-draggable filemanager rounded-md"
      defaultPosition={{ x: PositionX, y: PositionY }}
      position={{ x: PositionX, y: PositionY }}
      onStop={(e, data) => {
        setPositionX(data?.x);
        setPositionY(data?.y);
      }}
    >
      <Resizable
        bounds={"parent"}
        minHeight={500}
        minWidth={780}
        defaultSize={{ width: Width, height: Height }}
        size={{ width: Width, height: Height }}
        onResizeStop={(e, direction, ref, d) => {
          setWidth((Width) => Width + d.width);
          setHeight((Height) => Height + d.height);
        }}
      >
        <div
          className={`p-1 w-full h-full rounded ${
            isMaximized
              ? "min-w-[100vw] min-h-[89vh] "
              : `max-w-[${Width}] max-h-[${Height}]`
          }`}
          onClick={onClick}
        >
          <div className="bg-[#D9D9D9] h-full w-full handleFileManager rounded-md">
            {/* NAVBAR */}
            <div className="flex justify-between items-center w-full p-1 px-2 bg-[#676464] h-[9%]">
              <div>Filemanager</div>
              <div className="flex justify-between items-center">
                <MacNav
                  type={"MINIMIZE"}
                  Page={"FILE_MANAGER"}
                  name={"FILE_MANAGER"}
                />
                <MacNav
                  type={"MAXIMIZE"}
                  Page={"FILE_MANAGER"}
                  name={"FILE_MANAGER"}
                  isMaximized={isMaximized}
                />
                <div
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <MacNav
                    type={"CLOSE"}
                    Page={"FILE_MANAGER"}
                    name={"FILE_MANAGER"}
                  />
                </div>
              </div>
            </div>
            {/* NAVBAER ENDS */}
            {/* MAIN */}
            <div className="h-[91%] flex justify-start items-start">
              {/* DISKS */}
              <div className="w-[24%] bg-[#8B8989] h-full flex flex-col justify-start items-center [&>*]:mt-2">
                <Disks Disk={"musics"} title={"Musics"} />

                <Disks Disk={"documents"} title={"Documents"} />

                <Disks Disk={"videos"} title={"Videos"} />
              </div>
              {/* DISKS ENDs */}
              {/* DIVIDERS */}
              <div className="w-[76%] h-full">
                <Outlet />
              </div>
              {/* END OF DEVIDERS */}
            </div>
            {/* MAIN ENDs */}
          </div>
        </div>
      </Resizable>
    </Draggable>
  );
}

export default FileManager;
