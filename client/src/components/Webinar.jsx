
import { Checkbox, Label } from "flowbite-react";
import { Button } from "flowbite-react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Webinar = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const handleCheckboxChange = (value) => {
    setSelectedCheckbox(value);
  };
  return (
    <div className="flex flex-col">
      
      <div className="flex flex-row justify-evenly items-center mt-5">
        <div>
      <div>
        <h5
          className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white"
          style={{ width: "870px", borderBottom: "5px solid #000" }}
        >
          Detail Pendaftaran
        </h5>
      </div>
        <div
          className="max-w-sm flex justify-between"
          style={{ maxWidth: "900px" }}
        >
          <div className="p-10 "
            style={{
              width: "880px",
              height: "500px",
           
              backgroundColor: "white",
            }}
          >
            <h1 className="font-bold" style={{ fontSize: "30px" }}> Data Diri</h1>

            <div className="flex justify-between">
              <p style={{ fontSize: "20px", lineHeight: "1.5" }}>
                ID Transaksi
              </p>
              <p style={{ fontSize: "20px", lineHeight: "1.5" }}>12345</p>
            </div>

            <div className="flex justify-between border-b">
              <p style={{ fontSize: "20px", lineHeight: "1.5" }}>Nama</p>
              <p style={{ fontSize: "20px", lineHeight: "1.5" }}>
                ID Angel Naibaho
              </p>
            </div>

            <div className="flex justify-between">
              <p style={{ fontSize: "20px", lineHeight: "1.5" }}>Email</p>
              <p style={{ fontSize: "20px", lineHeight: "1.5" }}>
                angelnaibaho@gmail.com
              </p>
            </div>

            <h1 className="font-bold mt-10" style={{ fontSize: "30px" }}>Pembayaran</h1>
            <h1 style={{ fontSize: "20px" }}>Automatic Verification</h1>
          
          
              <div className="flex items-center gap-2 justify-between">
                <Label
                  className="flex gap-3"
                  style={{ fontSize: "25px" }}
                >
                  <input
                  type="checkbox"
                  value="bca"
                  checked={selectedCheckbox === 'bca'}
                  onChange={() => handleCheckboxChange('bca')}
                />
                  BCA&nbsp;
                </Label>
                <img
                  src="./public/bca.png"
                  alt="bca"
                  style={{ width: "200px", height: "150px" }}
                />
              </div>
              <div className="flex items-center gap-3 justify-between">
               
                
                <Label className="flex gap-3" style={{ fontSize: "25px" }}>
                <input
                  type="checkbox"
                  value="qris"
                  checked={selectedCheckbox === 'qris'}
                  onChange={() => handleCheckboxChange('qris')}
                />
                  QRIS&nbsp;
                </Label>
                <img
                  src="./public/qris.png"
                  alt="qris"
                  style={{ width: "400px", height: "50px" }}
                />
              </div>
              
          </div>
        </div>
        </div>

        <div>
        <Card href="#" className="max-w-sm">
          <h1 style={{ fontSize: "20px", borderBottom: "2px solid #000" }}>
            02:13 | Segera selesaikan pendaftaranmu
          </h1>
          <h1 className="font-bold mt-1" style={{ fontSize: "30px" }}>
            {" "}
            Detail Harga
          </h1>
          <div
            className="flex justify-between"
            style={{ borderBottom: "2px solid #000" }}
          >
            <h1 style={{ fontSize: "20px", lineHeight: "1" }}>Total Bayar</h1>
            <h1 style={{ fontSize: "20px", lineHeight: "1" }}>Gratis</h1>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex">
              Saya setuju dengan Syarat & Ketentuan yang benar di eduweb.&nbsp;
            </Label>
          </div>

          <Button className="bg-midBlue" as={Link} to={"/homepage"}>
            Daftar Webinar
          </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Webinar;
