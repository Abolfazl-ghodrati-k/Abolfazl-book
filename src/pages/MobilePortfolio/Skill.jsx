import React from "react";
import { useState } from "react";

function Skill({ icon, name, fill, link }) {
  const [size, setsize] = useState();
  if (icon) {
    var Component = icon;
  }

  const openSkill = () => {
    window.open(link, "_blank");
  };
  return (
    <div
      onClick={() => openSkill()}
      onMouseEnter={() => {
        setsize((size) => (size = 40));
      }}
      onMouseLeave={() => {
        setsize((size) => (size = 30));
      }}
      className={`flex items-center ${
        Component ? "justify-between" : "justify-end"
      } h-[50px] border rounded p-1 group cursor-pointer`}
      style={
        size === 40
          ? { width: "135px", height: "60px" }
          : { width: "130px", height: "50px" }
      }
    >
      {Component && (
        <Component fill={fill} size={size ? size : 30} className="icon-cont" />
      )}
      <p className={`${name === 'Redux-saga' ? 'text-[0.9rem]' : ''}`}>{name}</p>
    </div>
  );
}

export default Skill;
