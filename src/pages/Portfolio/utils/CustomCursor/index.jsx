import React, { useCallback, useContext, useEffect, useRef } from "react";
import "./style.scss";
import CustomCursorContext from "./context/CustomCursorContext";

const CustomCursor = () => {
  const { type } = useContext(CustomCursorContext);
  const secondaryCursor = useRef(null);
  const mainCursor = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  const secondFollowerAnimation = useRef();

  const handlePrimaryFollower = useCallback((event) => {
    const { clientX, clientY } = event;

    const mouseX = clientX;
    const mouseY = clientY;

    positionRef.current.mouseX =
      mouseX - secondaryCursor?.current?.clientWidth / 2;
    positionRef.current.mouseY =
      mouseY - secondaryCursor?.current?.clientHeight / 2;
    if (mainCursor?.current?.style) {
      mainCursor.current.style.transform = `translate3d(${
        mouseX - mainCursor?.current?.clientWidth / 2
      }px, ${mouseY - mainCursor?.current?.clientHeight / 2}px, 0)`;
    }
  }, []);

  const followMouse = useCallback(() => {
    requestAnimationFrame(followMouse);
    const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } =
      positionRef.current;
    if (!destinationX || !destinationY) {
      positionRef.current.destinationX = mouseX;
      positionRef.current.destinationY = mouseY;
    } else {
      positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
      positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
      if (
        Math.abs(positionRef.current.distanceX) +
          Math.abs(positionRef.current.distanceY) <
        0.1
      ) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.destinationX += distanceX;
        positionRef.current.destinationY += distanceY;
      }
    }
    if (secondaryCursor?.current?.style) {
      secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    }
  }, []);

  useEffect(() => {
    try {
      secondFollowerAnimation.current = requestAnimationFrame(followMouse);
    } catch (error) {
      console.log("Mouse followers arent working properly: ", error)
      cancelAnimationFrame(secondFollowerAnimation.current);
    }
    document.addEventListener("mousemove", handlePrimaryFollower);

    return () =>
      document.removeEventListener("mousemove", handlePrimaryFollower);
  }, [followMouse, handlePrimaryFollower]);

  return (
    <div className={`cursor-wrapper ${type}`}>
      <div className="main-cursor " ref={mainCursor}>
        <div className="main-cursor-background"></div>
      </div>
      <div className="secondary-cursor" ref={secondaryCursor}>
        <div className="cursor-background"></div>
      </div>
    </div>
  );
};

export default CustomCursor;
