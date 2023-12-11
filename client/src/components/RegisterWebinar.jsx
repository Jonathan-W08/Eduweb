import React, { useState } from "react";
import InputRegister from "./InputRegister";
import SelectRegister from "./SelectRegister";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RegisterWebinar = (props) => {
  // Account Data
  const account = useSelector((props) => props.account.account);

  const navigation = useNavigate();

  // Image Process
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  // Webinar Data
  const [webinarData, setWebinarData] = useState({
    title: "",
    categories: "IT Development",
    date: "",
    time: "",
    penyelenggara: account.name,
    cost: "",
    profile_img: account.profile_img,
    webinar_img: "",
    id_penyelenggara: account.id,
  });

  // Change Webinar Data
  const changeWebinarData = (e, name) => {
    setWebinarData((prev) => {
      return { ...prev, [name]: e.target.value };
    });
  };

  // Add Webinar to database
  const addWebinar = async () => {
    const formData = new FormData();
    formData.append("file", file);

    for (const property in webinarData) {
      formData.append(property, webinarData[property]);
    }

    try {
      await axios.post("http://localhost:5000/webinars", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });

      props.getWebinars();
    } catch (err) {
      console.log(err.message);
    }
  };

  // Submit Button
  const submitWebinar = (e) => {
    e.preventDefault();
    addWebinar();
    navigation("/penyelenggara");
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

          <div>
            <InputRegister
              title={"Poster"}
              placeholder={"Image"}
              required={true}
              preLabel={false}
              type={"file"}
              changeLoadImage={loadImage}
              preview={preview}
            />
          </div>

          <SelectRegister
            title={"Category"}
            name={"categories"}
            options={[
              "IT Development",
              "Bisnis",
              "Marketing",
              "Bahasa Inggris",
              "Self Development",
            ]}
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
