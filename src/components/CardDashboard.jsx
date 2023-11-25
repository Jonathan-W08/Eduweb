import React from "react";
import { Display } from "react-bootstrap-icons";

const CardDashboard = (props) => {
  return (
    <div className=" border-[1px] border-neutral-200 p-5 rounded-md shadow-sm">
      <div className="flex items-center border-b-[1px] border-black pb-5">
        <div className=" text-xl">
          <Display />
        </div>
        <p className=" font-bold ml-3">{props.title}</p>
      </div>
      <div className="pt-5">
        <span className="font-bold text-5xl">0</span>
        <span className="ml-3">Webinar</span>
      </div>
    </div>
  );
};

export default CardDashboard;
