import React from "react";
import { Button } from "flowbite-react";
import { Card } from "flowbite-react";
import { Accordion } from "flowbite-react";
import { MdDateRange } from "react-icons/md";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";
import { IoTicketSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Partsipasi = () => {
  return (
    <div className="flex flex-wrap p-8">
      <div className="flex flex-row justify-between w-full">
        <img
          src="./public/img/webinar.jpg"
          alt=""
          style={{ width: "840px", height: "400px" }}
        />

        <div>
          <div
            className=" flex flex-col justify-start p-10 m-10"
            style={{
              width: "500px",
              height: "250px",
              backgroundColor: "white",
            }}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Fundamental UI/UX design: Wireframing dan Prototyping
            </h5>
            <ul>
              <li className="flex items-center mt">
                {" "}
                <MdDateRange /> Jumat, 17 Nov 2023{" "}
              </li>
              <li className="flex items-center mt">
                <MdOutlineAccessTimeFilled /> 14.00 - 16.00 WIB
              </li>
              <li
                className="flex items-center mt"
                style={{ borderBottom: "5px solid #000" }}
              >
                <RiComputerFill /> IT Development
              </li>
            </ul>

            <div className="flex items-center mt-4">
              <img
                className=" w-9"
                src="./public/Logo_Infinite.png"
                alt="logo"
              />
              <p className="text-xs ml-2 font-bold">
                Infinite Learning Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between w-full">
        <div
          className="p-8"
          style={{ width: "840px", height: "200px", backgroundColor: "white" }}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Deskripsi
          </h5>
          <p
            className="font-normal text-gray-700 dark:text-gray-400"
            style={{ textAlign: "justify" }}
          >
            Menguasai UI/UX adalah investasi berharga di era digital. Dengan
            keahlian ini, Anda bisa menciptakan pengalaman menarik, meningkatkan
            interaksi produk, dan memikat audiens. Era digital menekankan
            inovasi dan rasa percaya diri dalam merancang UI/UX yang luar biasa.
            Gabung di webinar kami, dan tingkatkan produk digital Anda!
            <br />
            #GrowTogetherWithIL
          </p>
        </div>

        <div
          className="flex flex-col justify-center p-10 mx-10"
          style={{ width: "505px", height: "200px", backgroundColor: "white" }}
        >
          <h5
            className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center mt-4"
            style={{ borderBottom: "5px solid #000" }}
          >
            <IoTicketSharp style={{ width: "130px", height: "100px" }} />
            Fundamental UI/UX design: Wireframing dan Prototyping
          </h5>
          <div className="flex justify-between">
            <h5 className="flex  text-2xl font-tracking-tight text-gray-900 dark:text-white ">
              Harga
            </h5>
            <h5 className="flex text-end text-2xl font-tracking-tight text-gray-900 dark:text-white ">
              Gratis
            </h5>
          </div>
          <Button className="bg-midBlue" as={Link} to={"/webinar"}>
            Lanjut Ke Detail Pendaftaran
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Partsipasi;
