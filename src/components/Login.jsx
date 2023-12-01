import React, { useState } from "react";
import InputRegister from "./InputRegister";
import InputLogin from "./InputLogin";

import { Link } from "react-router-dom";

import { Google, Facebook } from "react-bootstrap-icons";
import { Button, Checkbox } from "flowbite-react";

const Login = () => {
  const [userLogin, setUserLogin] = useState(true);

  const changeUserLogin = (e) => {
    setUserLogin((prev) => !prev);
  };

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

        <div className="w-full flex-1 p-3 md:p-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">LOGIN</h1>
            <p className="text-xs">
              Belum mempunyai akun?{" "}
              <span className=" text-strongBlue">Buat akun kamu disini</span>
            </p>
          </div>

          <div>
            <InputLogin
              title={"Username or email"}
              id={"email"}
              placeholder={"john@gmail.com"}
              type={"email"}
            />
            <InputLogin
              title={"Password"}
              id={"password"}
              placeholder={"Your password"}
              type={"password"}
            />
            <div className="flex items-center mt-3 text-xs">
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

          <div className="flex justify-between items-center mt-6">
            <Link className="text-xs">Lupa Password?</Link>
            <Button
              color="blue"
              className="p-0"
              as={Link}
              to={userLogin ? "/" : "/penyelenggara"}
            >
              Submit
            </Button>
          </div>

          <div className=" mt-6 text-center text-xs">
            <p>Login Menggunakan</p>
            <div className="flex justify-center gap-3 mt-1 text-lg text-white">
              <div className="p-2">
                <Google />
              </div>
              <div className="p-2">
                <Facebook />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
