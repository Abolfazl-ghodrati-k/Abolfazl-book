import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Musics() {
  
  const location = useLocation();

  const [Active, setActive] = useState("");

  useEffect(() => {
    if (location.pathname.includes("rock")) {
      setActive((Active) => (Active = "rock"));
    } else if (location.pathname.includes("r&b")) {
      setActive((Active) => (Active = "r&b"));
    } else if (location.pathname.includes("rap")) {
      setActive((Active) => (Active = "rap"));
    } else if (location.pathname.includes("iranian")) {
      setActive((Active) => (Active = "iranian"));
    }
  });

  return (
    <div className="w-full h-full flex justify-start items-start">
      <div className="w-[28%] bg-[#B5B5B5] h-full">
        <div className="w-[20%] mt-3 text-left flex flex-col item-center justify-start text-[1.2rem] [&>*]:mb-2 cursor-pointer mx-auto">
          <Link to="/filemanager/musics/rock">
            <div>
              <span
                className={`${
                  Active === "rock"
                    ? "font-bold underline underline-offset-8"
                    : ""
                } mr-1`}
              >
                Rock
              </span>
              <span>{Active === "rock" ? "→" : ""}</span>
            </div>
          </Link>
          <Link to="/filemanager/musics/r&b">
            <div>
              <span
                className={`${
                  Active === "r&b"
                    ? "font-bold underline underline-offset-8"
                    : ""
                } mr-1`}
              >
                R&B
              </span>
              <span>{Active == "r&b" ? "→" : ""}</span>
            </div>
          </Link>
          <Link to="/filemanager/musics/rap">
            <div>
              <span
                className={`${
                  Active === "rap"
                    ? "font-bold underline underline-offset-8"
                    : ""
                } mr-1`}
              >
                Rap
              </span>
              <span>{Active === "rap" ? "→" : ""}</span>
            </div>
          </Link>
          <Link to="/filemanager/musics/iranian">
            <div>
              <span
                className={`${
                  Active === "iranian"
                    ? "font-bold underline underline-offset-8"
                    : ""
                } mr-1`}
              >
                Iranian
              </span>
              <span>{Active === "iranian" ? "→" : ""}</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-[72%] h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Musics;
