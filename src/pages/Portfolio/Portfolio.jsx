import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { AiOutlineCloudDownload } from "react-icons/ai";

function Portfolio() {
  const PORTFOLIO = useSelector((state) => state.portfolio);

  return (
    <div className="w-full  flex justify-center items-center max-w-[1400px] mx-auto px-2 h-[98%] mt-1">
      <div className="rounded-md bg-CMD w-full h-full flex flex-col portfolioWrapper">
         portfolio
      </div>
    </div>
  );
}

export default Portfolio;
