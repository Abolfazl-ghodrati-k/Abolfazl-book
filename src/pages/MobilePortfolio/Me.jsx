import React from "react";
import "./style.css";

function Me() {
  return (
    <div className="flex flex-col items-center justify-start w-full">
      <div className="w-full text-center max-w-[36rem]">
        <p>LET'S GET TO KNOW ME!</p>
        <p className="text-[3rem] text-[#01161E]">
          HI, I'm <span className="text-[#124559] font-bold">Abolfazl</span>
        </p>
        <div className="text-[2.8rem] text-[#01161E] flex items-center justify-center front ">
          <p>A FRONTEND</p>
          <span className="dev ml-3">
            <span id="D">D</span>
            <span id="E">E</span>
            <span id="V">V</span>
            <span id="E1">E</span>
            <span id="L">L</span>
            <span id="O">O</span>
            <span id="P">P</span>
            <span id="E2">E</span>
            <span id="R">R</span>
          </span>
        </div>
        <div>
          I'm a front-end developer specializing in building exceptional digital
          experience. Currently, I'm focused on building responsive front-end
          web applications while learning back-end technologies
        </div>
        <div>Icons</div>
        <div className="w-full">
          <p className="text-[1.5rem] text-[#124559] w-full text-left ml-2">
            After
          </p>
          <p className="w-full text-left ml-4">
            Knowing about me you can open the same website on your desktop to
            see that im not a normal developer <br /> ( try it on screen's which
            are bigger than 1024px )
          </p>
        </div>
      </div>
    </div>
  );
}

export default Me;
