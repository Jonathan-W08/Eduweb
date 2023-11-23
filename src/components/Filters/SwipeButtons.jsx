import React from "react";
import { useSwiper } from "swiper/react";

const SwipeButtons = (props) => {
  const swiper = useSwiper();
  return (
    <div className={props.className}>
      <button
      className=" bg-slate-950 text-red-400 p-3"
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        Prev
      </button>
      <button
      className=" bg-slate-400 text-red-400 p-3"
        onClick={() => {
          swiper.slideNext();
        }}
      >
        Next
      </button>
    </div>
  );
};

export default SwipeButtons;
