import React from "react";
import InputRegister from "./InputRegister";
import SelectRegister from "./SelectRegister";

const RegisterWebinar = () => {
  return (
    <div className="flex-1 bg-whiteBlue w-5/6 min-h-screen p-6">
      <h1 className="text-3xl font-bold">Webinar Registration</h1>
      <div className="mt-12">
        <InputRegister
          title={"Nama Penyelenggara"}
          placeholder={"Infinite Learning"}
          required={true}
          preLabel={false}
          type={"text"}
        />
        <InputRegister
          title={"Judul Event"}
          placeholder={"UI/UX Rules"}
          required={true}
          preLabel={false}
          type={"text"}
        />
        <InputRegister
          title={"Harga"}
          placeholder={"10.000"}
          required={true}
          preLabel={"Rp"}
          type={"number"}
        />

        <div className="grid grid-cols-2 gap-3">
          <InputRegister
            title={"Date"}
            placeholder={""}
            required={true}
            preLabel={false}
            type={"date"}
          />
          <InputRegister
            title={"Time"}
            placeholder={"UI/UX Rules"}
            required={true}
            preLabel={false}
            type={"time"}
          />
        </div>

        <div>
          <InputRegister
            title={"Poster"}
            placeholder={"Image"}
            required={true}
            preLabel={false}
            type={"image"}
          />
        </div>

        <SelectRegister
          title={"Category"}
          options={["IT Development", "Bisnis", "Marketing"]}
          required={true}
        />

        <button className="bg-midBlue text-white px-6 py-2 mt-6 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default RegisterWebinar;
