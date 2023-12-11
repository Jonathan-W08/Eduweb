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
    <div className="flex flex-row p-8 gap-10">
      <div className="flex flex-row justify-between w-full p-10 mx-10">
      <Card
      className="sm"
      imgAlt=""
      imgSrc="./public/img/webinar.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       Deskripsi
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Menguasai UI/UX adalah investasi berharga di era digital. Dengan
            keahlian ini, Anda bisa menciptakan pengalaman menarik, meningkatkan
            interaksi produk, dan memikat audiens. Era digital menekankan
            inovasi dan rasa percaya diri dalam merancang UI/UX yang luar biasa.
            Gabung di webinar kami, dan tingkatkan produk digital Anda!
            <br />
            #GrowTogetherWithIL
      </p>
    </Card>

        
      </div>

      <div className="flex flex-col justify-between">

        <div className="p-10 mx-10">
        <Card href="#" className="max-w-sm">
        <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Fundamental UI/UX design: Wireframing dan Prototyping
            </h5>
            <ul>
              <li className="flex items-center mt gap-3" style={{fontSize:"25px", lineHeight: "1.5"}}>
                {" "}
                <MdDateRange /> Jumat, 17 Nov 2023{" "}
              </li>
              <li className="flex items-center mt gap-3"  style={{fontSize:"25px", lineHeight: "1.5"}}>
                <MdOutlineAccessTimeFilled /> 14.00 - 16.00 WIB
              </li>
              <li
                className="flex items-center mt gap-3"
                style={{ borderBottom: "5px solid #000",fontSize:"25px", lineHeight: "1.5"}}
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
    </Card>
        </div>

       
        <div
          className="flex flex-col justify-center p-10 mx-10">
          <Card href="#" className="max-w-sm">
          <h5
            className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center mt-4 gap-3"
            style={{ borderBottom: "5px solid #000" }}
          >
            <IoTicketSharp  style={{ width: "130px", height: "100px" }} />
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
          </Card>
        </div>

      </div>

    </div>
  );
};

export default Partsipasi;
