import React from "react";

function CMDcommands({ err }) {
  return (
    <div className="flex justify-start items-center">
      <p
        className="w-[100px] text-[whitesmoke] text-opacity-40"
        style={{ fontSize: ".7rem" }}
      >
        AbolfazlBook/IP {"→"}
      </p>
      {err.err && (
        <div className="flex justify-start items-start">
          {err.preCmd && (
            <div
              className="mr-1 text-[#e495958e]"
              style={{ fontSize: ".7rem" }}
            >
              {err.preCmd}
            </div>
          )}
          {err.Cmd && (
            <div className="text-[red]" style={{ fontSize: ".7rem" }}>
              <span className="text-[green] mr-2 text-left">
                Abolfazl
              </span>
              {err.Cmd}
            </div>
          )}
        </div>
      )}
      {err.Res && (
        <div
          className="flex justify-start items-start"
          style={{ fontSize: ".7rem" }}
        >
          <div style={{ fontSize: ".7rem" }} className="text-[#ffffff]">
            <span className="text-[green] min-w-[50px] text-left mr-2">
              Abolfazl
            </span>
            {err.Cmd}
          </div>
        </div>
      )}
    </div>
  );
}

export default CMDcommands;
