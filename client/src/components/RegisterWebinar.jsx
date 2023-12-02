import React, { useState } from "react";
import InputRegister from "./InputRegister";
import SelectRegister from "./SelectRegister";

import axios from "axios";
import generateUniqueId from "generate-unique-id";

const RegisterWebinar = () => {
  // Generate unique ID
  const generatedID = generateUniqueId();

  // Webinar Data
  const [webinarData, setWebinarData] = useState({
    title: "",
    categories: "",
    date: "",
    time: "",
    penyelenggara: "",
    cost: "",
    profile_img: "",
    webinar_img: "",
  });

  // Change Webinar Data
  const changeWebinarData = (e, name) => {
    setWebinarData((prev) => {
      return { ...prev, [name]: e.target.value };
    });
  };

  // Add Webinar to database
  const addWebinar = async () => {
    try {
      await axios.post("http://localhost:5000/webinars", {
        ...webinarData,
        id: generatedID,
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  // Submit Button
  const submitWebinar = (e) => {
    e.preventDefault();
    addWebinar();
  };

  return (
    <div className="flex-1 bg-whiteBlue w-5/6 min-h-screen p-6">
      <h1 className="text-3xl font-bold">Webinar Registration</h1>
      <div className="mt-12">
        <form onSubmit={submitWebinar}>
          <InputRegister
            title={"Nama Penyelenggara"}
            name={"penyelenggara"}
            placeholder={"Infinite Learning"}
            required={true}
            preLabel={false}
            type={"text"}
            value={webinarData.penyelenggara}
            changeWebinarData={changeWebinarData}
          />
          <InputRegister
            title={"Judul Event"}
            name={"title"}
            placeholder={"UI/UX Rules"}
            required={true}
            preLabel={false}
            type={"text"}
            value={webinarData.title}
            changeWebinarData={changeWebinarData}
          />
          <InputRegister
            title={"Harga"}
            name={"cost"}
            placeholder={"10.000"}
            required={true}
            preLabel={"Rp"}
            type={"number"}
            value={webinarData.cost}
            changeWebinarData={changeWebinarData}
          />

          <div className="grid grid-cols-2 gap-3">
            <InputRegister
              title={"Date"}
              name={"date"}
              placeholder={""}
              required={true}
              preLabel={false}
              type={"date"}
              value={webinarData.date}
              changeWebinarData={changeWebinarData}
            />
            <InputRegister
              title={"Time"}
              name={"time"}
              placeholder={"UI/UX Rules"}
              required={true}
              preLabel={false}
              type={"time"}
              value={webinarData.time}
              changeWebinarData={changeWebinarData}
            />
          </div>

          {/* <div>
            <InputRegister
              title={"Poster"}
              placeholder={"Image"}
              required={true}
              preLabel={false}
              type={"image"}
            />
          </div> */}

          <SelectRegister
            title={"Category"}
            name={"categories"}
            options={["IT Development", "Bisnis", "Marketing"]}
            required={true}
            value={webinarData.categories}
            changeWebinarData={changeWebinarData}
          />

          <button
            type="submit"
            className="bg-midBlue text-white px-6 py-2 mt-6 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterWebinar;
