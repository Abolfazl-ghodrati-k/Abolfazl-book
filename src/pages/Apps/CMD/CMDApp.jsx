import React, { useEffect, useRef, useState } from "react";
import MacNav from "../../../Components/MacNav";
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";
import { useDispatch, useSelector } from "react-redux";
import CMDcontainer from "./CMDcontainer";
import CMDResponse from "./CMDResponse";
import CMDcommands from "./CMDcommands";

export default function CMDApp({ onClick }) {
  const dispatch = useDispatch();

  const Element = useRef();
  const commands = useRef();

  const [PositionX, setPositionX] = useState(40);
  const [PositionY, setPositionY] = useState(40);

  const [Width, setWidth] = useState(600);
  const [Height, setHeight] = useState(400);

  const { errCount, isMaximized } = useSelector((state) => state.cmd);

  useEffect(() => {
    if (isMaximized) {
      setPositionX(0);
      setPositionY(0);
    }
  }, [isMaximized]);

  useEffect(() => {
    commands.current.scrollTo(0, commands.current.scrollHeight);
  });
  return (
    <Draggable
      bounds="parent"
      cancel=".cancelcmd"
      handle=".handlecmd"
      defaultClassName="react-draggable cmd"
      defaultPosition={{ x: PositionX, y: PositionY }}
      position={{ x: PositionX, y: PositionY }}
      onStop={(e, data) => {
        setPositionX(data?.x);
        setPositionY(data?.y);
      }}
    >
      <Resizable
        bounds={"window"}
        minWidth={400}
        minHeight={300}
        defaultSize={{ width: Width, height: Height }}
        onResizeStop={(e, direction, ref, d) => {
          setWidth((Width) => Width + d.width);
          setHeight((Height) => Height + d.height);
        }}
      >
        <div
          onClick={onClick}
          className={`bg-CMD rounded w-full h-full ${
            isMaximized
              ? "min-w-[100vw] min-h-[89vh] "
              : `max-w-[${Width}] max-h-[${Height}]`
          } flex flex-col gap-1 p-1 px-2 `}
        >
          <div ref={Element} className="handlecmd w-full h-full">
            {/* Header ---------------> */}
            <div className="flex justify-between content-center h-[7%]">
              <div className="text-[white]">Abolfazl CMD</div>
              <div className="flex justify-center items-center">
                <MacNav type={"MINIMIZE"} Page={"CMD"} name={"CMD"} isMaximized={isMaximized} />
                <MacNav
                  type={"MAXIMIZE"}
                  Page={"CMD"}
                  name={"CMD"}
                  isMaximized={isMaximized}
                />
                <div
                  onClick={() => {
                    dispatch({
                      type: "INCREASE_ERR",
                      payload: [
                        {
                          preCmd: "",
                          Cmd: "",
                          err: false,
                          Res: false,
                          Text: "",
                        },
                      ],
                    });
                  }}
                >
                  <MacNav type={"CLOSE"} Page={"CMD"} name={"CMD"} isMaximized={isMaximized} />
                </div>
              </div>
            </div>
            <hr className="-mx-2 mt-1" />
            <div
              className="max-h-[90%] overflow-y-scroll scrollbar pb-2"
              ref={commands}
            >
              {errCount.map((err, index) => {
                if (err?.err || err?.Res) {
                  return (
                    <div className="flex flex-col items-start justify-start">
                      <CMDcommands err={err} />
                      <CMDResponse err={err} />
                    </div>
                  );
                } else {
                  return null;
                }
              })}
              <span>{<CMDcontainer />}</span>
            </div>
          </div>
        </div>
      </Resizable>
    </Draggable>
  );
}
