import React from "react";
import { useEffect } from "react";
import CMDhelp from "./CMDhelp";

function CMDResponse({ err }) {
  return (
    <div className="flex items-start justify-start my-1">
      {err.err == true && (
        <div className="flex flex-col justify-start items-start text-[0.7rem]">
          {err.preCmd && (
            <span>
              who are you talking to i dont know
              <span className="ml-1 text-[red]">{err.preCmd}</span>
            </span>
          )}
          {err.Cmd && (
            <span>
              the <span className="ml-1 text-[red]">Abolfazl {err.Cmd}</span>{" "}
              does'nt exist
            </span>
          )}
          <CMDhelp />
        </div>
      )}
      {err.Res && (
        <div>
          {err.Text == "help" ? (
            <div className="flex">
              <CMDhelp />
            </div>
          ) : (
            <div>{err.Text}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default CMDResponse;
