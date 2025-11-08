/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

function CMDcontainer() {
  const dispatch = useDispatch();
  // @ts-expect-error TS(2339): Property 'cmd' does not exist on type 'unknown'.
  const ErrCount = useSelector((state) => state.cmd.errCount);

  const CommandInput = useRef();
  const PreCommand = useRef();

  useEffect(() => {
    console.log(ErrCount);
  }, [ErrCount]);

  const CheckCommand = useCallback(
    (command) => {
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      PreCommand.current.value = "";
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      PreCommand.current.focus();
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      CommandInput.current.value = "";
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      CommandInput.current.disabled = true;
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      CommandInput.current.style.display = "none";
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      PreCommand.current.style.color = "white";

      // console.log(command);
      switch (command) {
        case "help":
          {
            let resObj = {
              Res: true,
              Text: "help",
              Cmd: "help",
            };
            let instanceofRes = ErrCount;
            instanceofRes.push(resObj);
            dispatch({
              type: "INCREASE_ERR",
              payload: instanceofRes,
            });
          }
          break;
        case "cyrus-coin":
          {
            window.open("http://cyrus-coin.netlify.app", "_blank");
            let resObj = {
              Res: true,
              Text: "Forwarded to cyrus-coin",
              Cmd: "cyrus-coin",
            };
            let instanceofRes = ErrCount;
            instanceofRes.push(resObj);
            dispatch({
              type: "INCREASE_ERR",
              payload: instanceofRes,
            });
          }
          break;
        case "yola":
          {
            window.open("https://yola-tailwind.vercel.app/", "_blank");
            let resObj = {
              Res: true,
              Text: "Forwarded to yola",
              Cmd: "cyrus-coin",
            };
            let instanceofRes = ErrCount;
            instanceofRes.push(resObj);
            dispatch({
              type: "INCREASE_ERR",
              payload: instanceofRes,
            });
          }
          break;
        case "abolfazl-note":
          {
            let resObj = {
              Res: true,
              Text: "Forwarded to abolfazl note ...  come back here habibi😘",
              Cmd: "abolfazl-note",
            };
            let instanceofErr = ErrCount;
            instanceofErr.push(resObj);
            dispatch({
              type: "INCREASE_ERR",
              payload: instanceofErr,
            });
            setTimeout(() => {
              window.open("https://abolfazl-note.vercel.app/", "_self");
            }, 1000);
          }
          break;
        case "dandanino":
          {
            let resObj = {
              Res: true,
              Text: "Forwarded to dandanino ... come back here habibi😘",
              Cmd: "abolfazl-note",
            };
            let instanceofErr = ErrCount;
            instanceofErr.push(resObj);
            dispatch({
              type: "INCREASE_ERR",
              payload: instanceofErr,
            });
            setTimeout(() => {
              window.open("https://dandanino.vercel.app/", "_self");
            }, 1000);
          }
          break;
        case "clear":
          dispatch({
            type: "INCREASE_ERR",
            payload: [],
          });

          break;
        default:
          const errObj = {
            preCmd: "",
            Cmd: command,
            err: true,
          };
          const instanceofErr = ErrCount;
          instanceofErr.push(errObj);
          dispatch({
            type: "INCREASE_ERR",
            payload: instanceofErr,
          });
          break;
      }
    },
    [ErrCount, dispatch]
  );

  useEffect(() => {
    // @ts-expect-error TS(2532): Object is possibly 'undefined'.
    PreCommand.current.addEventListener("keydown", (e) => {
      // console.log(e)
      if (e.code === "Enter") {
        // @ts-expect-error TS(2532): Object is possibly 'undefined'.
        const value = PreCommand.current.value;
        const errObj = {
          preCmd: value,
          Cmd: "",
          err: true,
        };
        const instanceofErr = ErrCount;
        instanceofErr.push(errObj);
        // console.log(instanceofErr);
        dispatch({
          type: "INCREASE_ERR",
          payload: instanceofErr,
        });
        e.target.value = "";
      }
    });
    // @ts-expect-error TS(2532): Object is possibly 'undefined'.
    CommandInput.current.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        // @ts-expect-error TS(2532): Object is possibly 'undefined'.
        const value = CommandInput.current.value;
        // setpreErr((err) => (err = true));
        // setPreCmdErr((msg) => (msg = e.target.value));

        CheckCommand(value);
      }
    });
  }, [CheckCommand, ErrCount, dispatch]);

  const handleChange = (e) => {
    // console.log(e);
    if (e.target.value.includes("Abolfazl")) {
      e.target.style.color = "green";
      e.target.style.width = "50px";
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      CommandInput.current.style.display = "flex";
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      CommandInput.current.focus();
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      if (CommandInput.current.disabled) {
        // @ts-expect-error TS(2532): Object is possibly 'undefined'.
        CommandInput.current.disabled = false;
        e.target.value = "Abolfazl";
        // @ts-expect-error TS(2532): Object is possibly 'undefined'.
        CommandInput.current.focus();
      }
    } else {
      e.target.style.color = "white";
      e.target.style.width = "auto";
    }
  };

  const handleChange2 = (e) => {
    if (e.target.value === "") {
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      CommandInput.current.style.display = "none";
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      PreCommand.current.focus();
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      CommandInput.current.disabled = true;
    }
  };

  return (
    <div className="flex flex-col items-start justify-start">
      <div className="flex justify-start items-center mt-1">
        <p className="w-[100px]" style={{ color: "white", fontSize: ".7rem" }}>
          AbolfazlBook/IP {"→"}
        </p>
        <div className="flex justify-start cancelcmd">
          <div className="flex justify-start items-center">
            <input
              type="text"
              className="bg-CMD color-white border-none focus:outline-none"
              style={{
                fontSize: ".7rem",
                color: "white",
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
    </div>
  );
}

export default CMDcontainer;
