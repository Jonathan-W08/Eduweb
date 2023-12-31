import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./filters.css";

// import required modules
import { Navigation } from "swiper/modules";
import SwipeButtons from "./SwipeButtons";

const Filters = (props) => {
  const [filters, setFilters] = useState([
    "IT Development",
    "Bisnis",
    "Marketing",
    "Bahasa Inggris",
    "Self Development",
  ]);

  const [navigationShow, setNavigationShow] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Check Window Width Size
  const checkWindowWidth = () => {
    if (window.innerWidth >= 1280) {
      setSlidesPerView(6);
    } else if (window.innerWidth >= 1024) {
      setSlidesPerView(5);
    } else if (window.innerWidth >= 768) {
      setSlidesPerView(3);
    } else if (window.innerWidth >= 640) {
      setSlidesPerView(2);
    } else if (window.innerWidth <= 640) {
      setSlidesPerView(1);
    }
  };

  // Call event listener for Check Winsow Width Size
  window.addEventListener("resize", checkWindowWidth);

  useEffect(() => {
    checkWindowWidth();

    return () => window.removeEventListener("resize", checkWindowWidth);
  }, []);

  return (
    <div
      className="relative mt-6 p-3 sm:p-6 xl:px-12"
      onMouseEnter={() => {
        setNavigationShow(true);
      }}
      onMouseLeave={() => {
        setNavigationShow(false);
      }}
    >
      <Swiper
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={25}
        className="mySwiper cursor-grab select-none"
      >
        <SwipeButtons
          className={" h-full leading-none opacity-50"}
          navigationShow={navigationShow}
        />

        {filters.map((filter, i) => {
          return (
            <SwiperSlide
              key={i}
              className={`${
                props.filterActive[filter]
                  ? "opcacity-100 bg-lightBlue"
                  : "opacity-50"
              } text-sm px-3 py-2 rounded-md border border-gray-500 w-max cursor-pointer transition-all hover:opacity-100`}
              onClick={() => props.changeFilterActive(filter)}
            >
              {filter}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Filters;
