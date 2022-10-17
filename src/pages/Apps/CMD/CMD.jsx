import React, { useRef, useState } from "react";
import MacNav from "../../../Components/MacNav";
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";

export default function CMD() {
  const CommandInput = useRef();
  const PreCommand = useRef();
  const [Width, setWidth] = useState(400);
  const [Height, setHeight] = useState(400);
  const [NotDragging, setNotDragging] = useState(true);
  const [DragEnded, setDragEnded] = useState(false);

  const handleChange = (e) => {
    if (e.target.value.includes("Abolfazl")) {
      e.target.style.color = "green";
      e.target.style.width = "58px";
      CommandInput.current.style.display = "flex";
      CommandInput.current.focus();
      if (CommandInput.current.disabled) {
        CommandInput.current.disabled = false;
        e.target.value = "Abolfazl";
        CommandInput.current.focus();
      }
    } else {
      e.target.style.color = "white";
      e.target.style.width = "auto";
    }
  };

  const handleChange2 = (e) => {
    if (e.target.value == "") {
      CommandInput.current.style.display = "none";
      PreCommand.current.focus();
      CommandInput.current.disabled = true;
    }
  };

  return (
    <Draggable
      disabled={NotDragging}
      defaultPosition={{ x: 10, y: 10 }}
      // onStart={() => console.log("in draggable", notDragging)}
      onStop={() => {
        setTimeout(() => {
          setNotDragging(true);
          setDragEnded(true);
        }, [100]);
      }}
    >
      <Resizable
        defaultSize={{ width: Width, height: Height }}
        onResizeStop={(e, direction, ref, d) => {
          setWidth((Width) => Width + d.width);
          setHeight((Height) => Height + d.height);
        }}
      >
        <div
          onDoubleClick={() => {
            setNotDragging(false);
            setTimeout(() => {
              if (!DragEnded) {
                setNotDragging(true);
              }
            }, 1000);
          }}
          className="bg-CMD rounded h-full flex flex-col gap-1 p-1 px-2"
        >
          <div className="flex justify-between content-center">
            <div>top</div>
            <div className="flex justify-center items-center">
              <MacNav type={"MINIMIZE"} Page={"CMD"} />
              <MacNav type={"MAXIMIZE"} Page={"CMD"} />
              <MacNav type={"CLOSE"} Page={"CMD"} />
            </div>
          </div>
          <hr className="-mx-2 mt-1" />
          <div className="flex justify-start items-center">
            <p className="" style={{ color: "white", fontSize: ".7rem" }}>
              AbolfazlBook/IP &gt;
            </p>
            <div className="flex justify-start">
              <input
                type="text"
                className="bg-CMD color-white border-none focus:outline-none"
                style={{
                  fontSize: ".7rem",
                  color: "white",
                  paddingLeft: "5px",
                  width: "auto",
                }}
                ref={PreCommand}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                className="bg-CMD color-white border-none focus:outline-none"
                style={{ fontSize: ".7rem", color: "white", display: "none" }}
                ref={CommandInput}
                onChange={(e) => handleChange2(e)}
              />
            </div>
          </div>
        </div>
      </Resizable>
    </Draggable>
  );
}