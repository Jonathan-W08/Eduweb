import React, { useEffect, useState } from "react";
import InputRegister from "./InputRegister";
import SelectRegister from "./SelectRegister";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const UpdateWebinar = () => {
  const navigation = useNavigate();
  const { id } = useParams();

  // Webinars Data
  const webinars = useSelector((props) => props.webinars.webinars);

  // Webinar Data
  const [webinarData, setWebinarData] = useState({
    title: "",
    categories: "IT Development",
    date: "",
    time: "",
    penyelenggara: "",
    cost: "",
    profile_img: "",
    webinar_img: "",
  });

  useEffect(() => {
    const webinar = webinars.find((webinar) => webinar.id === id);
    if (webinar) {
      setWebinarData({
        title: webinar.title,
        categories: webinar.categories,
        date: webinar.date,
        time: webinar.time,
        penyelenggara: webinar.penyelenggara,
        cost: webinar.cost,
        profile_img: webinar.profile_img,
        webinar_img: webinar.webinar_img,
      });

      setPreview(webinar.webinar_img);

      return;
    }

    navigation("/penyelenggara/dashboard");
  }, []);

  // Image Process
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  // Change Webinar Data
  const changeWebinarData = (e, name) => {
    setWebinarData((prev) => {
      return { ...prev, [name]: e.target.value };
    });
  };

  // Update Webinar to database
  const updateWebinar = async () => {
    const formData = new FormData();

    if (file !== null) {
      formData.append("file", file);
    }

    for (const property in webinarData) {
      formData.append(property, webinarData[property]);
    }

    try {
      await axios.patch(`http://localhost:5000/webinars/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });

      getWebinars = { getWebinars };
    } catch (err) {
      console.log(err.message);
    }
  };

  // Submit Button
  const submitWebinar = (e) => {
    e.preventDefault();
    updateWebinar();
    navigation("/penyelenggara");
  };

  return (
    <div className="flex-1 bg-whiteBlue w-5/6 min-h-screen p-6">
      <h1 className="text-3xl font-bold">Mengubah Webinar</h1>
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
              title={"Tanggal"}
              name={"date"}
              placeholder={""}
              required={true}
              preLabel={false}
              type={"date"}
              value={webinarData.date}
              changeWebinarData={changeWebinarData}
            />
            <InputRegister
              title={"Waktu"}
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
            title={"Kategori"}
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
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateWebinar;
