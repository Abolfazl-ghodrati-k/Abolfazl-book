import React from "react";

function CMDcommands({ err }) {
  return (
    <div className="flex justify-start items-center">
      <p
        className="w-[108px] text-[whitesmoke] text-opacity-40"
        style={{ fontSize: ".7rem" }}
      >
        AbolfazlBook/IP {"→"}
      </p>
      {err.err && (
        <div className="flex justify-start items-start">
          <div className="mr-1" style={{ fontSize: ".7rem" }}>
            {err.preCmd}
          </div>
          {err.Cmd && (
            <div style={{ fontSize: ".7rem" }}>
              <span className="text-[green]">Abolfazl</span>
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
          <div style={{ fontSize: ".7rem" }}>
            <span className="text-[green] mr-1">Abolfazl</span>
            {err.Cmd}
          </div>
        </div>
      )}
    </div>
  );
}

export default CMDcommands;
