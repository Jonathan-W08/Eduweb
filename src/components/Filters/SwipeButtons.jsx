import React from "react";
import { useSwiper } from "swiper/react";

const SwipeButtons = () => {
  const swiper = useSwiper();
  return (
    <div>
      <button
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        Prev
      </button>
      <button
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
