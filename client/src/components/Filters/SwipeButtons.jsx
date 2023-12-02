import React from "react";
import { useSwiper } from "swiper/react";


import { CaretLeftFill, CaretRightFill } from "react-bootstrap-icons";

const SwipeButtons = (props) => {
  const swiper = useSwiper();
  return (
    <div className={props.className}>
      <button

        className={`absolute left-0 top-1/2 -translate-y-1/2 z-50 transition-opacity ${
          props.navigationShow ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <CaretLeftFill className="text-black text-2xl" />
      </button>
      <button

        className={`absolute right-0 top-1/2 -translate-y-1/2 z-50 transition-opacity ${
          props.navigationShow ? "opacity-100" : "opacity-0"
        }`}

        onClick={() => {
          swiper.slideNext();
        }}
      >
        <CaretRightFill className="text-black text-2xl" />
      </button>
    </div>
  );
};

export default SwipeButtons;
