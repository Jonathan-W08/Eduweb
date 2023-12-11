import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={"/partsipasi"}>
      <div
        className={` flex-col bg-white w-full p-3 opacity-80 shadow-md rounded-md break-all cursor-pointer transition-all hover:border-2 hover:border-cyan hover:scale-105 hover:rotate-3 hover:shadow-xl hover:opacity-100`}
      >
        <div className="w-full">
          <img src={props.webinarImg} alt="webinar image" />
        </div>

        <div className="mt-3">
          <div className="flex gap-2">
            <p className=" text-xs font-semibold bg-cyan px-2 rounded-full">
              {props.categories}
            </p>
          </div>

          <h1 className="font-semibold text-sm mt-4">{props.title}</h1>
          <p className="text-xs mt-4">
            {props.date} | {props.time}
          </p>

          <div className="flex items-center mt-4">
            <img
              className="w-9 rounded-full"
              src={props.profileImg}
              alt="logo"
            />
            <p className="text-xs ml-2 font-bold">{props.penyelenggara}</p>
          </div>

          <p className="font-bold mt-5">
            {props.cost === "0" ? "Gratis" : props.cost}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
