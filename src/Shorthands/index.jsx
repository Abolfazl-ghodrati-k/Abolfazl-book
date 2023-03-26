import React from "react";
import Weather from "./Weather";
import Timezone from "./Timezone";

function index() {
  return (
    <div className="bg-CMD rounded-md px-2 absolute left-1 bottom-2 max-w-[32%] h-[57px] flex items-center justify-start ">
      <Weather />
      <span className="mx-2 w-[1px] h-[95%] my-auto bg-[gray]"></span>
      <Timezone />
    </div>
  );
}

export default index;
