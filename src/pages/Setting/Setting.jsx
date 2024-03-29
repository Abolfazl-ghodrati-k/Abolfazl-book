import React, { useState } from "react";
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";
import { useSelector } from "react-redux";
import MacNav from "../../Components/MacNav";
import ChangeColor from "./ChangeColor";
import BackgroundImage from "./BackgroundImage";
import Disks from "../FileManager/Components/Disks";

function Setting({ onClick, zIndex }) {
  const [Height, setHeight] = useState(500);
  const [Width, setWidth] = useState(700);
  const [myRoute, setmyRoute] = useState(null);
  const setting = useSelector((state) => state.setting);

  return (
    <Draggable
      handle=".handlesetting"
      cancel=".cancel"
      defaultClassName="react-draggable setting"
    >
      <Resizable
        minHeight={500}
        minWidth={764}
        defaultSize={{ width: Width, height: Height }}
        onResizeStop={(e, direction, ref, d) => {
          setWidth((Width) => Width + d.width);
          setHeight((Height) => Height + d.height);
        }}
      >
        <div
          onClick={onClick}
          className={`w-full h-full bg-gray-200 rounded p-1 ${
            setting?.isMaximized
              ? "min-w-[100vw] min-h-[89vh] "
              : `max-w-[${Width}] max-h-[${Height}]`
          }`}
        >
          <div className="wrap handlesetting w-full h-full">
            <div className="top flex justify-between items-center px-2 py-1 h-[7%]">
              <div className="nav flex justify-between items-center">
                Setting
              </div>
              <div className="ctrl flex">
                <MacNav name={"SETTING"} Page={setting} type={"MINIMIZE"} />
                <MacNav name={"SETTING"} Page={setting} type={"MAXIMIZE"} isMaximized={setting.isMaximized}/>
                <MacNav name={"SETTING"} Page={setting} type={"CLOSE"} />
              </div>
            </div>
            <div className="w-full h-[1px] bg-white"></div>
            <div className="flex w-full h-[92.5%]">
              <div className=" bg-gray-300 text-[0.9rem] w-full max-w-[200px] h-full flex flex-col [&>*]:mt-2 [&>*]:ml-1">
                <Disks
                  Setting
                  Disk={"color"}
                  title={"Color"}
                  clicked={myRoute}
                  onClick={setmyRoute}
                />
                <Disks
                  Setting
                  Disk={"image"}
                  title={"Background image"}
                  clicked={myRoute}
                  onClick={setmyRoute}
                />
              </div>
              <div className="w-full h-full max-h-full overflow-y-scroll scrollbar">
                {myRoute === "Color" ? (
                  <ChangeColor />
                ) : myRoute === "Background image" ? (
                  <BackgroundImage Width={Width} Height={Height} />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Resizable>
    </Draggable>
  );
}

export default Setting;
