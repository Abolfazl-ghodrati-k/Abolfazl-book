import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";
import { useNavigate } from "react-router";

import "./style.css";
import MacNav from "../../Components/MacNav";
import Disks from "./Components/Disks";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Musics from "./Musics";
import Documents from "./Documents/Documents";
import Videos from "./Videos";
import Desktop from "../Desktop";
import Content from "./Components/Content";

function FileManager({ zIndex, onClick }) {
  // ***************************************** STATE ***********************
  const [Width, setWidth] = useState(900);
  const [Height, setHeight] = useState(500);
  const navigate = useNavigate();

  return (
    <Draggable
      handle=".handleFileManager"
      defaultClassName="react-draggable filemanager"
    >
      <Resizable
        defaultSize={{ width: Width, height: Height }}
        size={{ width: Width, height: Height }}
        onResizeStop={(e, direction, ref, d) => {
          setWidth((Width) => Width + d.width);
          setHeight((Height) => Height + d.height);
        }}
      >
        <div
          className="p-1 w-full h-full rounded"
          onClick={onClick}
          style={{ position: "absolute", zIndex: zIndex }}
        >
          <div className="bg-[#D9D9D9] h-full w-full handleFileManager rounded">
            {/* NAVBAR */}
            <div className="flex justify-between items-center w-full p-1 bg-[#676464] h-[9%]">
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
                <Routes>
                  <Route path="/filemanager/musics" element={<Musics />}>
                    <Route
                      path="rock"
                      element={<Content type={"music"} field={"rock"} />}
                    />
                    <Route
                      path="rap"
                      element={<Content type={"music"} field={"rap"} />}
                    />
                    <Route
                      path="r&b"
                      element={<Content type={"music"} field={"r&b"} />}
                    />
                    <Route
                      path="pop"
                      element={<Content type={"music"} field={"pop"} />}
                    />
                  </Route>
                  <Route
                    path="/filemanager/documents"
                    element={<Documents />}
                  />
                  <Route path="/filemanager/videos" element={<Videos />} />
                </Routes>
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
