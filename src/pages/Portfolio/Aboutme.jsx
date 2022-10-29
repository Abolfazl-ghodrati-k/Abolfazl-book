import React from "react";
import './style.css'

function Aboutme() {
  return (
    <div className="flex justify-between items-center bg-CMD-200 rounded m-2 ">
      {/* ********************************** TITLE *********************************** */}
      <div className="flex justify-start">
        <div className="flex flex-col text-center text-[white] text-[12px] m-2 ml-3">
          <span>A</span>
          <span>B</span>
          <span>O</span>
          <span>U</span>
          <span>T</span>
          <span className="h-[4px]"></span>
          <span>M</span>
          <span>E</span>
        </div>
        <div className="w-[1px] bg-[white] mx-1"></div>
      </div>
      {/* **************************************************************************** */}
      <div className="aboutme w-full bg-CMD rounded px-1 max-w-[80%]  sm:max-w-[89%]  md:max-w-[93%]  lg:max-w-[93%] xl:max-width-[93%] mx-auto ">
        <p className="aboutmeText text-[white]">
          Hi ! im a front-end developer which has near to 3 years experience in
          this fileld and i've fininshed several <br /> projects by myself or in
          groups , also i know a little about about being a ui-ux designer. If
          you are reading this <span className="text-[black]">First of All</span> <br /> thank's and for{" "}
          <span className="text-[black]">SECOND</span> mean's that you've enjoyed my app which is a honor
          and for <span className="text-[black]">THIRD</span> i like to resume my journey beside you
          guys. so it'll be a pleasure for me if contact me by my contactMe app.
        </p>
      </div>
    </div>
  );
}

export default Aboutme;
