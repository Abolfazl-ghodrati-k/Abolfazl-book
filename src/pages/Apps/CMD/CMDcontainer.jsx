import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function CMDcontainer() {
  const [Err, setErr] = useState(false);
  const [Command, setCommand] = useState("");
  const [preErr, setpreErr] = useState(false);
  const [PreCmdErr, setPreCmdErr] = useState("");
  const [CommandInstance, setCommandInstance] = useState("");

  const dispatch = useDispatch();
  const ErrCount = useSelector((state) => state.cmd.errCount);

  const CommandInput = useRef();
  const PreCommand = useRef();

  useEffect(() => {
    PreCommand.current.addEventListener("keydown", (e) => {
      // console.log(e)
      if (e.code === "Enter") {
        const value = PreCommand.current.value;
        setpreErr((err) => (err = true));
        setPreCmdErr((msg) => (msg = e.target.value));
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
    CommandInput.current.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        const value = CommandInput.current.value;
        // setpreErr((err) => (err = true));
        // setPreCmdErr((msg) => (msg = e.target.value));

        CheckCommand(value);
      }
    });
  }, []);

  const handleChange = (e) => {
    // console.log(e);
    setPreCmdErr((msg) => (msg = e.target.value));
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
    setCommandInstance((instance) => (instance = e.target.value));
  };

  const CheckCommand = (command) => {
    PreCommand.current.value = "";
    PreCommand.current.focus();
    CommandInput.current.value = "";
    CommandInput.current.disabled = true;
    CommandInput.current.style.display = "none";
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
      case "clear":
        {
          dispatch({
            type: "INCREASE_ERR",
            payload: [
              { preCmd: "", Cmd: "", err: false, Res: false, Text: "" },
            ],
          });
        }
        break;
      default:
        setErr((err) => (err = true));
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
  };

  return (
    <div className="flex flex-col items-start justify-start">
      <div className="flex justify-start items-center">
        <p className="w-[108px]" style={{ color: "white", fontSize: ".7rem" }}>
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
    </div>
  );
}

export default CMDcontainer;
