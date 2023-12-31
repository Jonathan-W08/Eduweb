import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import CryptoJS from "crypto-js";

import { Checkbox } from "flowbite-react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

const Login = (props) => {
  const account = useSelector((state) => state.account.account);
  const navigate = useNavigate();

  useEffect(() => {
    if (!account.status) {
      navigate("/login");
    } else if (account.status === "user") {
      navigate("/");
    } else if (account.status === "penyelenggara") {
      navigate("/penyelenggara");
    }
  }, [account]);

  // Status Login
  const [userLogin, setUserLogin] = useState(true);

  const changeUserLogin = (e) => {
    setUserLogin((prev) => !prev);
  };

  // Handle Google Login
  const handleCallbackResponse = async (response, userLogin) => {
    try {
      // Take google data
      const obj = jwtDecode(response.credential);

      const data = {
        name: obj.name,
        email: obj.email,
        profile_img: obj.picture,
      };

      // Create Cookie
      const cookieEc = CryptoJS.AES.encrypt(
        JSON.stringify(data.email),
        "eduweb"
      ).toString();

      Cookies.set("id", cookieEc);
      Cookies.set("status", userLogin ? "user" : "penyelenggara");

      // Create new account
      const resp = axios.post("http://localhost:5000/login", data);
      const data2 = await resp;

      props.changeAccount({
        ...data,
        webinars_save: data2.data.webinars_save,
        status: userLogin ? "user" : "penyelenggara",
      });

      props.changeResetAccount();

      userLogin ? navigate("/penyelenggara") : navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "4132285366-tscm0u9347v2hb6h11g759bbjmk2co66.apps.googleusercontent.com",
      callback: (response) => handleCallbackResponse(response, userLogin),
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, [userLogin]);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-2/3 p-3 xs:max-w-md md:max-w-3xl">
      <div className="flex gap-3 items-center w-full h-full bg-lightBlue rounded-md shadow-lg overflow-hidden">
        <div className="hidden w-1/2 h-full md:block">
          <img
            src="/public/img/login-img.jpg"
            alt="img"
            className="h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-around h-full w-full flex-1 p-3 md:p-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">LOGIN</h1>
            <p className="text-xs">Temukan berbagai macam webinar</p>
          </div>

          <div>
            <p className="text-xs text-center">Login menggunakan Google</p>
            <div id="signInDiv" className="flex justify-center"></div>
          </div>
          <div>
            <p className="text-xs">Ingin mempromosikan webinar?</p>
            <div className="flex items-center text-xs">
              <Checkbox
                id="penyelenggara"
                value={userLogin}
                onChange={changeUserLogin}
              />
              <label htmlFor="penyelenggara" className="ml-2">
                Login sebagai penyelenggara
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
