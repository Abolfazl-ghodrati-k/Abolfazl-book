import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

function Disks({ Disk, title, Setting }) {
  const [Bold, setBold] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes(Disk)) {
      // console.log(Disk);
      setBold(true);
    } else {
      setBold(false);
    }
  });

  return (
    <Link to={Setting ? `/setting/${Disk}` : `/filemanager/${Disk}`}>
      <div
        className={`${Setting ? "w-full" : "w-[50%]"} text-left ${
          true ? "font-semibold" : ""
        } flex item-center cursor-pointer`}
      >
        <span
          className={`${Bold ? "font-bold underline underline-offset-8" : ""}`}
        >
          {title}
        </span>
        <span className="ml-1">{Bold ? "→" : ""}</span>
      </div>
    </Link>
  );
}

export default Disks;
