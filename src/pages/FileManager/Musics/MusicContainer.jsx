import React, { useEffect, useState } from "react";
import { rock } from "./Data";
import { RandB } from "./Data";
import { rap } from "./Data";
import { iranian } from "./Data";
import Music from "./Music";

function MusicContainer({ Type }) {
  const [Data, setData] = useState([]);
  useEffect(() => {
    switch (Type) {
      case "rock":
        setData(rock);
        break;
      case "rap":
        setData(rap);
        break;
      case "r&b":
        setData(RandB);
        break;
      case "iranian":
        setData(iranian);
        break;
      default:
        break;
    }
  });
  return (
    <div className="w-full h-full flex flex-col p-2 ">
      {Data.map((music) => {
        return <div key={music.src}><Music title={music.title} src={music.src} /></div>;
      })}
    </div>
  );
}

export default MusicContainer;
