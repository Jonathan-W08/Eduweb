import React from 'react'
import { Card } from 'flowbite-react';
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaHandshake } from "react-icons/fa";
import { RiPhoneFindLine } from "react-icons/ri";

const Tentangkami = () => {
  return (
    <div className="flex flex-col" style={{backgroundColor:"white"}}>
      <div>
      <h1 className="text-[70px] font-bold text-center" style={{margin:"8rem"}}>EDUWEB MENYEDIAKAN INFORMASI MENGENAI WEBINAR </h1>
      <h1 className="text-[30px] text-center" >Memudahkan dalam mencari informasi mengenai webinar - webinar yang akan diadakan</h1>
      <h1 className="" style={{padding:"3rem"}}>#ChooseYourEducationFindYourWebinar</h1>
      </div>

      
<div>
  <div>
<h1 className="text-[70px] font-bold text-center" >Mengapa Harus EduWeb? </h1>
</div>
<div className="flex flex-row justify-between mt-10">

<Card href="#" className="max-w-sm flex justify-center">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      <HiOutlineSpeakerphone className="" style={{width:"200px", height:"200px"}} /> 
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Memperluas jangkauan audiens webinarmu dengan membuat promosi lebih efektif dan mudah dicapai.
      </p>
    </Card>

    <Card href="#" className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      <FaHandshake  className="" style={{width:"200px", height:"200px"}} /> 
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Bekerjasama dengan mitra-mitra ternama.
      </p>
    </Card>

    <Card href="#" className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      <RiPhoneFindLine  className="" style={{width:"200px", height:"200px"}} /> 
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Menemukan webinar dengan mudah berdasarkan kategori yang sesuai dengan minat dan bidang preferensimu.
      </p>
    </Card>

    </div> 
</div>

<div className="mt-10">

<div>
<h1 className="text-[70px] font-bold text-center" >Sejarah Kami </h1>

</div>

<div className="flex flex-row justify-between p-5 m-5">

  <div className="">
  <img className="p-10 mx-10" style={{width:"1000px", height:"200px"}}src="./public/Logo_Eduweb.png" alt="logo" />
  </div>

  <div className="flex flex-col">
  <h1 className="" style={{fontSize:"30px"}}>#ChooseYourEducation</h1>
  <h1 className="" style={{fontSize:"30px"}}>FindYourWebinar!</h1>
  </div>

  <div className="">
  <h1 className="" style={{fontSize:"30px", textAlign:"justify"}}>Eduweb terpercaya dalam memberikan informasi informasi mengenai event - event webinar yang akan diselenggarakan

<br />Banyaknya user yang kesulitan mencari informasi mengenai webinar dan banyaknya penyelenggara yang kesulitan mencari wadah untuk mempromosikan eventnya, oleh karena itu kami hadir dengan memberikan solusi yang mempermudah user dan penyelenggara event.</h1>
  </div>


</div>

     
</div>
    </div>
    
  )
}

export default Tentangkami