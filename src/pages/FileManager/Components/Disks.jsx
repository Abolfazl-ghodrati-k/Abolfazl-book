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
    <div
      className={`${Setting ? "w-[800%]" : "w-[50%]"} text-left ${
        true ? "font-semibold" : ""
      } flex item-center cursor-pointer`}
    >
      <Link to={Setting ? `/setting/${Disk}` : `/filemanager/${Disk}`}>
        <span
          className={`${Bold ? "font-bold underline underline-offset-8" : ""}`}
        >
          {title}
        </span>
        <span className="ml-1">{Bold ? "→" : ""}</span>
      </Link>
    </div>
  );
}

export default Disks;
