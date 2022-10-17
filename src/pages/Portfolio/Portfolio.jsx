import React, {useEffect} from "react";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";
import "./style.css";
import MacNav from "../../Components/MacNav";
import { useSelector } from "react-redux";

function Portfolio() {
  const PORTFOLIO = useSelector((state) => state.portfolio);
  useEffect(() => {
    console.log(PORTFOLIO);
  });

  return (
    <div className="w-full h-full">
      <div className="top flex justify-between items-center p-2">
        <div>title</div>
        <div className="flex justify-between items-center">
          <MacNav type={"CLOSE"} Page={PORTFOLIO} name={"PORTFOLIO"} />
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default Portfolio;
