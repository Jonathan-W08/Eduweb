import React from 'react'
import { Button } from 'flowbite-react';
import { Card } from 'flowbite-react';
import { Accordion } from 'flowbite-react';
import { MdDateRange } from "react-icons/md";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";
import { IoTicketSharp } from "react-icons/io5";
import { Link } from "react-router-dom";


const Partsipasi = () => {
  return (
    <div className="grid grid-cols-2 gap-4 justify-end " style={{maxWidth:"1500px", margin:"20px"}}>

      <div>
      <img src="./public/img/webinar.jpg" alt="" style={{width:"1000px",height:"600px"}}/>

     
        <div>
      <Card href="#" className="max-w-sm" style={{maxWidth:"1000px", margin:"20px auto"}}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Deskripsi
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400" style={{textAlign:"justify"}}>
      Menguasai UI/UX adalah investasi berharga di era digital. Dengan keahlian ini, Anda bisa menciptakan pengalaman menarik, meningkatkan interaksi produk, dan memikat audiens. Era digital menekankan inovasi dan rasa percaya diri dalam merancang UI/UX yang luar biasa. Gabung di webinar kami, dan tingkatkan produk digital Anda!
<br />#GrowTogetherWithIL
      </p>
    </Card>
    </div>

    </div>
      

      <div className="flex justify-end">
      <Card href="#" className="max-w-sm ">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Fundamental UI/UX design: Wireframing dan Prototyping
      </h5>
      <ul>
        <li className="flex items-center mt"> <MdDateRange /> Jumat, 17 Nov 2023 </li>
        <li className="flex items-center mt"><MdOutlineAccessTimeFilled /> 14.00 - 16.00 WIB</li>
        <li className="flex items-center mt" style={{borderBottom:"5px solid #000"}}><RiComputerFill /> IT Development</li>
      </ul>
      
    
      <div className="flex items-center mt-4" >
          <img className=" w-9" src="./public/Logo_Infinite.png" alt="logo" />
          <p className="text-xs ml-2 font-bold">Infinite Learning Indonesia</p>
        </div>
        
    </Card>
    

    

    <Card href="#" className="">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center mt-4" style={{borderBottom:"5px solid #000"}}>
    <IoTicketSharp style={{width:"100px", height:"100px"}} />
      Fundamental UI/UX design: Wireframing dan Prototyping
      </h5>
      <div className="flex gap -10">
      <h5 className="text-2xl font-tracking-tight text-gray-900 dark:text-white ">Harga Gratis</h5>
      </div>
      <Button className='bg-midBlue'> <Link to={"/webinar"}>Lanjut Ke Detail Pendaftaran</Link></Button>
      
    </Card>

    </div>
    
    
    </div>
 

  )
}

export default Partsipasi