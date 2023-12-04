import React from "react";
import Partsipasi from "./Partsipasi";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="flex flex-col bg-white w-full p-3 opacity-80 shadow-md rounded-md break-all cursor-pointer transition-all hover:border-2 hover:border-cyan hover:scale-105 hover:rotate-3 hover:shadow-xl hover:opacity-100">
      <div className="w-full">
        <img src="./public/img/webinar.jpg" alt="webinar image" />
      </div>

      <div className="mt-3">
        <div className="flex gap-2">
          <p className=" text-xs font-semibold bg-cyan px-2 rounded-full">
            Sertifikat
          </p>
          <p className="text-xs font-semibold bg-peach px-2 rounded-full">
            IT Development
          </p>
        </div>

        <h1 className="font-semibold text-sm mt-4">
          Fundamental UI/UX design: Wifeframing dan Prototyping
        </h1>
        <p className="text-xs mt-4">Jumat, 17 Nov 2023 | 14.00 - 16.00 WIB</p>

        <div className="flex items-center mt-4">
          <img className=" w-9" src="./public/Logo_Infinite.png" alt="logo" />
          <p className="text-xs ml-2 font-bold">Infinite Learning Indonesia</p>
        </div>

        <p className="font-bold mt-5" ><Link to={"/partsipasi"}>Gratis</Link></p>
        
      </div>
    </div>
  );
};

export default Card;
