import React, { useEffect, useLayoutEffect, useState } from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, FreeMode } from "swiper";

//swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Projects({ Numb }) {
  // const [Numb, setNumb] = useState();

  // useEffect(() => {
  //   const myWidth =
  //     document.getElementsByClassName("swiper-wrapper")[0].clientWidth;
  //     console.log(myWidth);
  //   const Scale = myWidth / 300;
  //   const ScaleB = +Scale.toFixed(2);
  //   setNumb((Numb) => (Numb = ScaleB));
  // });

  // useEffect(() => {
  //   function handleWindowResize() {
  //     const myWidth =
  //       document.getElementsByClassName("swiper-wrapper")[0].clientWidth;
  //     const Scale = myWidth / 300;
  //     const ScaleB = +Scale.toFixed(2);
  //     setNumb((Numb) => (Numb = ScaleB));
  //   }
  //   window.addEventListener("resize", handleWindowResize);
  //   return window.addEventListener("resize", handleWindowResize);
  // });

  return (
    <div className="flex justify-between items-center bg-CMD-200 rounded m-2 ">
      <div className="flex justify-start">
        <div className="flex flex-col text-center text-[white] text-[12px] m-2 ml-3">
          <span>P</span>
          <span>R</span>
          <span>O</span>
          <span>J</span>
          <span>E</span>
          <span>C</span>
          <span>T</span>
          <span>S</span>
        </div>
        <div className="w-[1px] bg-[white] ml-[.4rem]"></div>
      </div>
      <div className="w-[98%]">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            320: { slidesPerView: 1.1 },
            480: { slidesPerView: 1.3, spaceBetween: 10 },
            516: { slidesPerView: 1.4, spaceBetween: 10 },
            600: { slidesPerView: 1.5, spaceBetween: 10 },
            680: { slidesPerView: 1.7, spaceBetween: 10 },
            730: { slidesPerView: 1.9, spaceBetween: 10 },
            780: { slidesPerView: 2, spaceBetween: 10 },
            810: { slidesPerView: 2.2, spaceBetween: 10 },
            871: { slidesPerView: 2.4, spaceBetween: 10 },
            1064: { slidesPerView: 2.7, spaceBetween: 10 },
            1141: { slidesPerView: 3.1, spaceBetween: 10 },
            1190: { slidesPerView: 3.5, spaceBetween:10 }
          }}
        >
          <SwiperSlide>
            <div className="bg-CMD mr-1 w-[293px] text-white h-[140px] rounded">
              cyrus
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-CMD  w-[293px] text-white h-[140px] rounded">
              cyrus
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-CMD  w-[293px] text-white h-[140px] rounded">
              cyrus
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-CMD w-[293px] text-white h-[140px] rounded">
              cyrus
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-CMD w-[293px] text-white h-[140px] rounded">
              cyrus
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-CMD w-[293px] text-white h-[140px] rounded">
              cyrus
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-CMD w-[293px] text-white h-[140px] rounded">
              cyrus
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;

const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};
