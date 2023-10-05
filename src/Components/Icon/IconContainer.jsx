import React, { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import ResumeBlack from "../../Assets/Icons/ResumeBlack.png";

function IconContainer({
  type,
  icon,
  color,
  size,
  img,
  onClick,
  state,
  isDesktop,
  tooltip,
}) {
  const Component = icon;
  const ref = useRef(null);

  const [styles, setStyles] = useState({
    color: color || (state ? "black" : "white"), // Use specified color or default based on state
    bgColor: state,
    src: icon,
  });

  useEffect(() => {
    if (state) {
      if (!color) {
        setStyles((prevState) => ({
          ...prevState,
          color: "black",
        })); // Only change to black if color is not specified
      }

      setStyles((prevState) => ({
        ...prevState,
        bgColor: true,
        src: ResumeBlack,
      }));

      if (Component.name === "GrPowerShutdown") {
        ref.current.removeAttribute("id");
      }
    } else {
      setStyles((prevState) => ({
        ...prevState,
        bgColor: false,
        src: icon,
      }));

      if (Component && Component.name === "GrPowerShutdown") {
        ref.current.setAttribute("id", "shutDown-inactive");
      }
    }
  }, [Component, icon, state, color]);

  const clickHandler = (e) => {
    onClick();
  };

  return (
    <div
      ref={ref}
      onClick={clickHandler}
      className={`flex content-center rounded cursor-pointer transition-all duration-700 relative ${
        styles.bgColor ? "bg-gray-300" : ""
      } px-1 ${
        isDesktop
          ? "hover:bg-gray-200"
          : "hover:scale-150 icon hover:mx-[20px] hover:mb-2"
      }`}
      onMouseEnter={() => {
        if (state && !color) {
          setStyles({ ...styles, color: "white" });
        }
      }}
      onMouseLeave={() => {
        if (state && !color) {
          setStyles({ ...styles, color: "black" });
        }
      }}
      title={tooltip}
    >
      {img ? (
        <div className="flex justify-center content-center">
          <img
            src={styles.src}
            style={{ background: "transparent", width: size, height: size }}
            alt=""
          />
        </div>
      ) : (
        <div>
          <IconContext.Provider value={{ color: styles.color, size: size }}>
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
