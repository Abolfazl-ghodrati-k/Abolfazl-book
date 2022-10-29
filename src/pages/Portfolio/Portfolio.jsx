import React, { useEffect, useState } from "react";
import "./style.css";
//COMPONENTS
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import Skills from "./Skills";
import MacNav from "../../Components/MacNav";

import { useSelector } from "react-redux";
import { AiOutlineCloudDownload } from "react-icons/ai";

function Portfolio() {
  const PORTFOLIO = useSelector((state) => state.portfolio);
  const [Numb, setNumb] = useState();

  useEffect(() => {
    const myWidth =
      document.getElementsByClassName("swiper-wrapper")[0].clientWidth;
      // console.log(myWidth);
    const Scale = myWidth / 300;
    const ScaleB = +Scale.toFixed(2);
    setNumb((Numb) => (Numb = ScaleB));
  },[]);

  useEffect(() => {
    function handleWindowResize() {
      const myWidth =
        document.getElementsByClassName("swiper-wrapper")[0].clientWidth;
      const Scale = myWidth / 300;
      const ScaleB = +Scale.toFixed(2);
      setNumb((Numb) => (Numb = ScaleB));
    }
    window.addEventListener("resize", handleWindowResize);
    return window.addEventListener("resize", handleWindowResize);
  });

  return (
    <div className="w-full  flex justify-center items-center max-w-[1200px] mx-auto px-2 h-[98%] mt-1">
      <div className="rounded-md bg-CMD w-full h-full flex flex-col portfolioWrapper">
        {/* *********************************** TOP ****************************************** */}
        <div className="flex justify-between items-center p-2 ">
          <div className="flex justify-between pr-9 p-2 py-[.35rem] items-center bg-CMD-200 rounded cursor-pointer hover:bg-CMD">
            <AiOutlineCloudDownload
              color="white"
              size={25}
              className="mr-3 mt-[1px] ml-2"
            />
            <span className="text-[white] text-[15px]">Download resume</span>
          </div>
          <div className="flex justify-between items-center mr-3">
            <MacNav type={"CLOSE"} Page={PORTFOLIO} name={"PORTFOLIO"} />
          </div>
        </div>
        {/* ********************************* END OF TOP ************************************* */}
        {/* ********************************* START OF CART 1 ******************************** */}
        <Aboutme />
        {/* ******************************** END OF CART 1 ********************************** */}
        {/* ******************************** Card 2        ********************************** */}
        <Projects Numb={Numb}/>
        {/* ********************************************************************************* */}
        {/* ******************************* CARD 3 ****************************************** */}
        <Skills />
      </div>
    </div>
  );
}

export default Portfolio;
