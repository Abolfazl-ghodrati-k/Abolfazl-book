import React, { useEffect, useRef, useState } from "react";
import MacNav from "../../../Components/MacNav";
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";
import { useDispatch, useSelector } from "react-redux";
import CMDcontainer from "./CMDcontainer";
import CMDResponse from "./CMDResponse";
import CMDcommands from "./CMDcommands";

export default function CMD({ onClick }) {
  const dispatch = useDispatch();

  const Element = useRef();
  const commands = useRef();

  const [Width, setWidth] = useState(600);
  const [Height, setHeight] = useState(550);
  const [ErrCount, setErrCount] = useState([]);

  const { errCount } = useSelector((state) => state.cmd);

  useEffect(() => {
    commands.current.scrollTo(0, commands.current.scrollHeight);
  });
  return (
    <Draggable
      bounds="parent"
      cancel=".cancelcmd"
      handle=".handlecmd"
      defaultClassName="react-draggable cmd"
      position={{x:50 ,y:70}}
    >
      <Resizable
        defaultSize={{ width: Width, height: Height }}
        onResizeStop={(e, direction, ref, d) => {
          setWidth((Width) => Width + d.width);
          setHeight((Height) => Height + d.height);
        }}
      >
        <div
          onClick={onClick}
          className={`bg-CMD rounded w-full h-full flex flex-col gap-1 p-1 px-2 `}
        >
          <div ref={Element} className="handlecmd w-full h-full">
            <div className="flex justify-between content-center h-[7%]">
              <div>top</div>
              <div className="flex justify-center items-center">
                <MacNav type={"MINIMIZE"} Page={"CMD"} name={"CMD"} />
                <MacNav type={"MAXIMIZE"} Page={"CMD"} name={"CMD"} />
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
                  <MacNav type={"CLOSE"} Page={"CMD"} name={"CMD"} />
                </div>
              </div>
            </div>
            <hr className="-mx-2 mt-1" />
            <div className="h-[92%] overflow-y-scroll pb-2" ref={commands}>
              {errCount.map((err, index) => {
                return (
                  <div className="flex flex-col items-start justify-start">
                    <CMDcommands err={err} />
                    <CMDResponse err={err} />
                  </div>
                );
              })}
              <span>{<CMDcontainer />}</span>
            </div>
          </div>
        </div>
      </Resizable>
    </Draggable>
  );
}
