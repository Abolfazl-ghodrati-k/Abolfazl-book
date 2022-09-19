import { React, useEffect, useState, useRef } from "react";
import { IconContext } from "react-icons";
import ResumeBlack from "../../Assets/Icons/ResumeBlack.png";

function IconContainer({ icon, color, size, img, onClick, state }) {
  const Component = icon;
  const Ref = useRef(null);
  useEffect(() => {
    if (state) {
      setColor("black");
      setBgColor(true);
      setSRC(ResumeBlack);
      if(Component.name== "GrPowerShutdown"){
        Ref.current.removeAttribute("id")
        console.log(Ref.current);
      }
    } else {
      setColor("white");
      setBgColor(false);
      if (Component) {
        setSRC(icon);
        if(Component.name== "GrPowerShutdown"){
          Ref.current.setAttribute("id","shutDown-inactive")
          console.log(Ref.current);
        }
      }
    }
  }, [state]);
  const [Color, setColor] = useState("");
  const [BgColor, setBgColor] = useState(false);
  const [SRC, setSRC] = useState(icon);

  const ClickHandler = (e) => {
    onClick();
  };

  return (
    <div
    ref={Ref}
      onClick={(e) => ClickHandler(e)}
      className={`flex content-center rounded ${
        BgColor ? "bg-gray-300" : ""
      } px-1 hover:bg-gray-100`}
    >
      {img ? (
        <div className="flex justify-center content-center">
          <img
            src={SRC}
            style={{ background: "transparent", width: size, height: size }}
          />
        </div>
      ) : (
        <div>
          <IconContext.Provider value={{ color: Color, size: size }}>
            <div>
              <Component />
            </div>
          </IconContext.Provider>
        </div>
      )}
    </div>
  );
}

export default IconContainer;
