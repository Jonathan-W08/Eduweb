import React from "react";
import { Instagram, Facebook, Twitter } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="absolute w-screen top-full shadow-md">
      <div className="flex flex-col gap-5 justify-center items-start bg-white p-4 xs:flex-row xs:flex-wrap">
        <div className="flex items-center xs:basis-2card sm:basis-3card">
          <img className="w-9" src="/public/Logo_Eduweb.png" alt="logo" />
          <h1 className="font-semibold ml-2 xl:text-lg">EDUWEB</h1>
        </div>
        <div className="flex flex-col xs:basis-2card sm:basis-3card">
          <p className="font-semibold xs:text-center xl:text-lg">
            Terhubung Dengan Kami
          </p>
          <div className="flex gap-3 mt-2 xs:justify-center">
            <div>
              <a href="https://www.instagram.com">
                <Instagram className="xl:text-lg" />
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com">
                <Facebook className="xl:text-lg" />
              </a>
            </div>
            <div>
              <a href="https://www.twitter.com">
                <Twitter className="xl:text-lg" />
              </a>
            </div>
          </div>
        </div>
        <div className="xs:basis-2card sm:basis-3card sm:text-right">
          <div className="font-semibold xl:text-lg">Hubungi Kami</div>
          <p className="text-xs xl:text-base">+62 899XXXXXXXX</p>
          <p className="text-xs xl:text-base">eduweb@gmail.com</p>
        </div>
      </div>
      <div className="bg-midBlue text-white text-xs align text-center p-3">
        <p>@2023 Eduweb | All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
