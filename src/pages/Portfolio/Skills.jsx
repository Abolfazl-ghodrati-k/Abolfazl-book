import React, { useEffect, useLayoutEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";

//swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Skills() {
  const [Numb, setNumb] = useState();

  //   useLayoutEffect(() => {
  //     const myWidth =
  //       document.getElementsByClassName("swiper-wrapper")[0].clientWidth;

  //     const elementWidth =
  //       document.getElementsByClassName("programming")[0].clientWidth;
  //     const Scale = myWidth / elementWidth;
  //     const ScaleB = +Scale.toFixed(2);
  //     setNumb((Numb) => (Numb = ScaleB));
  //   });

  //   useEffect(() => {
  //     function handleWindowResize() {
  //       const myWidth =
  //         document.getElementsByClassName("swiper-wrapper")[0].clientWidth;
  //       const elementWidth =
  //         document.getElementsByClassName("programming")[0].clientWidth;
  //       const Scale = myWidth / elementWidth;
  //       const ScaleB = +Scale.toFixed(2);
  //       setNumb((Numb) => (Numb = ScaleB));
  //     }
  //     window.addEventListener("resize", handleWindowResize);
  //     return window.addEventListener("resize", handleWindowResize);
  //   });
  return (
    <div className="flex h-[162px] justify-between items-center bg-CMD-200 rounded m-2">
      <div className="flex justify-center h-full">
        <div className="flex my-auto flex-col text-center text-[white] text-[12px] m-2 ml-3">
          <span>S</span>
          <span>K</span>
          <span>I</span>
          <span>L</span>
          <span>L</span>
          <span>S</span>
        </div>
        <div className="w-[1px] bg-[white] ml-[.4rem]"></div>
      </div>
      <div className="w-[99%]">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            320: { slidesPerView: 1.1 },
            811: { slidesPerView: 1.7, spaceBetween: 10 },
            1058: { slidesPerView: 1.9, spaceBetween: 10 },
            1141: { slidesPerView: 1.99, spaceBetween: 50 },
          }}
        >
          <div className="flex justify-around">
            <SwiperSlide>
              <div className="programming bg-transparent border border-gray-100 rounded-md h-[150px] p-1 md:w-[400px] lg:w-[500px]">
                <div className=" flex react rounded text-[red] text-opacity-40 bg-CMD justify-center items-center">
                  React.js
                </div>
                <div className="flex vue  rounded text-[red] text-opacity-40 bg-CMD justify-center items-center">
                  Vue
                </div>
                <div className="flex vuex  rounded text-[red] text-opacity-40 bg-CMD justify-center items-center">
                  Vuex
                </div>
                <div className="flex redux  rounded text-[black] bg-CMD justify-center items-center">
                  Redux
                </div>
                <div className="flex redux-saga text-[0.9rem] rounded text-[black]  bg-CMD justify-center items-center">
                  Redux-saga
                </div>
                <div className="flex libraries rounded text-[14px] text-[red] text-opacity-40 bg-CMD justify-center items-center">
                  React-Libraries
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="programming bg-transparent border border-gray-100 rounded-md h-[150px] p-1 md:w-[400px] lg:w-[500px]">
                <div className="font-semibold flex Tailwind rounded text-[black] bg-white justify-center items-center">
                  Tailwind.css
                </div>
                <div className=" font-semibold flex Material rounded text-[#4c0a4e] bg-white justify-center items-center">
                  Material ui
                </div>
                <div className="font-semibold flex Bootstrap rounded text-[#0e0946] bg-white justify-center items-center">
                  Bootstrap
                </div>
                <div className="font-semibold flex Sass rounded text-[#a9ac15] bg-white justify-center items-center">
                  Sass
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Skills;
