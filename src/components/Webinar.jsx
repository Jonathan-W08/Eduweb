import React from 'react'
import { Checkbox, Label } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { Card } from 'flowbite-react';
import { Link } from "react-router-dom";

const Webinar = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      
        <div className="max-w-sm" style={{maxWidth:"900px", margin:"20px"}}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{borderBottom:"5px solid #000"}}>
            Detail Pendaftaran
            </h5>
            <div style={{width:"880px", height:"500px", margin:"20px", padding:"20px", backgroundColor:"white"}}>
                <h1 style={{fontSize:"30px"}}> Data Diri</h1>
                <h1 className="flex items-center mt space-x-4" style={{fontSize:"20px", lineHeight:"1.5"}}>Id Transaksi 12345</h1>
                <h1 className="flex items-center mt" style={{fontSize:"20px", lineHeight:"1.5"}}>Nama Angel Naibaho</h1>
                <h1 className="flex items-center mt" style={{fontSize:"20px", lineHeight:"1.5", borderBottom:"2px solid #000"}}>Email angelnaibaho@gmail.com</h1>

                <h1 style={{fontSize:"30px", lineHeight:"2"}}>
            Pembayaran
            </h1>
            <h1 style={{fontSize:"20px"}}>Automatic Verification</h1>
            <div className="flex max-w-md flex-col gap-4" id="checkbox">
      <div className="flex items-center gap-2">
        <Checkbox id="bca" defaultChecked />
        <img src="./public/bca.png" alt="bca" style={{width:"200px", height:"150px"}}/>
        <Label htmlFor="bca" className="flex" style={{fontSize:"25px"}}>BCA&nbsp;</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="qris" />
        <img src="./public/qris.png" alt="qris" style={{width:"800px", height:"50px"}}/>
        <Label htmlFor="qris" style={{fontSize:"25px"}}>QRIS&nbsp;</Label>
      </div>
      
      </div>
            
    </div>
    </div>
   

    

    <div>
    <Card href="#" className="">
      <h1 style={{fontSize:"20px", borderBottom:"2px solid #000"}}>02:13  | Segera selesaikan pendaftaranmu</h1>
      <h1 className="font-bold mt-1" style={{fontSize:"30px"}}> Detail Harga</h1>
      <h1 style={{fontSize:"20px",borderBottom:"2px solid #000", lineHeight:"1"}}>Total Bayar Gratis</h1>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="flex">Saya setuju dengan Syarat & Ketentuan yang benar di eduweb.&nbsp;</Label>
      </div>
      
      <Button className='bg-midBlue'> <Link to={"/webinar"}>Daftar Webinar</Link></Button>
    </Card>
    
    </div>

            
    </div>
  )
}

export default Webinar