import React, { useState } from "react";
// logo
import Abolfazl_logo from "../../Assets/portfolio/abolfazl-logo.png";
// components
import Me from "./Me";
import Projects from "./Projects";
import Skills from "./Skills";
// style
import "./style.css";

function MobilePortfolio() {
  const [Active_section, setActive_section] = useState(0);
  return (
    <div className="bg-[#eff6e0] h-[100vh] flex flex-col p-1 ">
      <div className="pl-[.4rem] flex w-full items-end justify-between">
        <img
          src={Abolfazl_logo}
          alt="logo"
          className="w-[70px] bg-transparent"
        />
        <div className="flex pr-2 pt-1 [&>*]:cursor-pointer [&>*]:ml-3 items-center mb-2 nav w-[200px] justify-between">
          <span
            className={`${Active_section == 0 ? "active-section" : ""}`}
            onClick={() => setActive_section((AS) => (AS = 0))}
          >
            ME
          </span>
          <span
            className={`${Active_section == 1 ? "active-section" : ""}`}
            onClick={() => setActive_section((AS) => (AS = 1))}
          >
            Skills
          </span>
          <span
            className={`${Active_section == 2 ? "active-section" : ""}`}
            onClick={() => setActive_section((AS) => (AS = 2))}
          >
            Projects
          </span>
        </div>
      </div>
      <div className="bg-[#124559] w-full h-[2px] z-0"></div>
      <div className="w-full pt-5">
        {Active_section == 0 ? <Me /> : Active_section == 1 ? <Skills /> : <Projects />}
      </div>
    </div>
  );
}

export default MobilePortfolio;
