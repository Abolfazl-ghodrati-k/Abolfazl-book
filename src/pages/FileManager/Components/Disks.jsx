import React, { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";

function Disks({ Disk, title, Setting, clicked, onClick }) {
  const [Bold, setBold] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes(Disk) || clicked === title) {
      setBold(true);
    } else {
      setBold(false);
    }
  });

  function handleClick() {
    if (onClick) {
      onClick(title);
    } else {
      return;
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`${Setting ? "w-full" : "w-[50%]"} text-left ${
        true ? "font-semibold" : ""
      } flex item-center cursor-pointer visited:text-[red]`}
    >
      <NavLink
        to={onClick ? null : `/filemanager/${Disk}`}
        className={({ isActive }) =>
          isActive && clicked !== title
            ? "outline-hidden border-none"
            : `${clicked === title ? "outline-hidden border-none" : ""}`
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
