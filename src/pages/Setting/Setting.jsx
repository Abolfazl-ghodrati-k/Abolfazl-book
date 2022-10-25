import { Resizable } from "re-resizable";
import React, { useState } from "react";
import Draggable from "react-draggable";
import { useSelector } from "react-redux";
import MacNav from "../../Components/MacNav";

function Setting({onClick, zIndex}) {
  const [Height, setHeight] = useState(400);
  const [Width, setWidth] = useState(400);
  const setting = useSelector((state) => state.setting);

  return (
    <div style={{position: "absolute", zIndex: zIndex}} >
      <Draggable handle=".handlesetting">
        <Resizable
          defaultSize={{ width: Width, height: Height }}
          onResizeStop={(e, direction, ref, d) => {
            setWidth((Width) => Width + d.width);
            setHeight((Height) => Height + d.height);
          }}
        >
          <div onClick={()=> onClick()} className="px-2 py-1 w-full h-full bg-gray-200">
            <div className="wrap handlesetting w-full h-full">
              <div className="top flex justify-between items-center">
                <div className="nav flex justify-between items-center">top</div>
                <div className="ctrl flex">
                  <MacNav name={"SETTING"} Page={setting} type={"MINIMIZE"} />
                  <MacNav name={"SETTING"} Page={setting} type={"MAXIMIZE"} />
                  <MacNav name={"SETTING"} Page={setting} type={"CLOSE"} />
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </Resizable>
      </Draggable>
    </div>
  );
}

export default Setting;
