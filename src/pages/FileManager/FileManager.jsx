import React, { useEffect, useState } from "react";
import Draggable, { DraggableCore } from "react-draggable";
import { Resizable } from "re-resizable";
import "./style.css";
import MacNav from "../../Components/MacNav";

function FileManager() {
  // ***************************************** STATE ***********************
  const [NotDragging, setNotDragging] = useState(true);
  const [Width, setWidth] = useState(400);
  const [Height, setHeight] = useState(400);
  const [DragEnded, setDragEnded] = useState(false);

  useEffect(() => {}, []);

  return (
    <Draggable
      disabled={NotDragging}
      defaultPosition={{ x: 10, y: 10 }}
      onStop={() => {
        setTimeout(() => {
          setNotDragging(true);
          setDragEnded(true);
        }, [100]);
      }}
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
          className="bg-CMD h-full w-full"
          onDoubleClick={() => {
            setNotDragging(false);
            setTimeout(() => {
              if (!DragEnded) {
                setNotDragging(true);
              }
            }, 1000);
          }}
        >
         <div>
          <div>Filemanager</div>
          <div>
            <MacNav type={"MINIMIZE"} Page={"FILE_MANAGER"}/>
            <MacNav type={"MAXIMIZE"} Page={"FILE_MANAGER"}/>
            <MacNav type={"CLOSE"} Page={"FILE_MANAGER"}/>
          </div>
         </div>
         <div></div>
        </div>
      </Resizable>
    </Draggable>
  );
}

export default FileManager;
