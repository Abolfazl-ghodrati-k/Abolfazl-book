import React, { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";

function Disks({ Disk, title, Setting }) {
  const [Bold, setBold] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes(Disk)) {
      setBold(true);
    } else {
      setBold(false);
    }
  });

  return (
    <div
      className={`${Setting ? "w-full" : "w-[50%]"} text-left ${
        true ? "font-semibold" : ""
      } flex item-center cursor-pointer visited:text-[red]`}
    >
      <NavLink
        to={Setting ? `/setting/${Disk}` : `/filemanager/${Disk}`}
        className={({ isActive }) =>
          isActive ? "outline-hidden border-none" : ""
        }
      >
        <span
          className={`${Bold ? "font-bold underline underline-offset-8" : ""}`}
        >
          {title}
        </span>
        <span className="ml-1">{Bold ? "→" : ""}</span>
      </NavLink>
    </div>
  );
}

export default Disks;
