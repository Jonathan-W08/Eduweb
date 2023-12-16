import React, { useEffect, useState } from "react";
import InputRegister from "./InputRegister";
import SelectRegister from "./SelectRegister";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeWebinars, fetchWebinars } from "../store/webinar-slice";

const UpdateWebinar = () => {
  const navigation = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  // Account Data
  const account = useSelector((state) => state.account.account);

  // Webinars Data
  const webinars = useSelector((props) => props.webinars.webinars);

  // Webinar Data
  const [webinarData, setWebinarData] = useState({
    title: "",
    description: "",
    categories: "IT Development",
    date: "",
    time: "",
    penyelenggara: "",
    cost: "",
    profile_img: "",
    webinar_img: "",
    webinar_link: "",
    id_penyelenggara: "",
  });

  useEffect(() => {
    console.log(webinars);

    const webinar = webinars.find((webinar) => webinar.id === id);

    console.log(webinar);

    if (webinar.id_penyelenggara !== account.id) {
      navigation("/penyelenggara/dashboard");
      return;
    }

    console.log(webinar);

    if (webinar) {
      setWebinarData({
        title: webinar.title,
        description: webinar.description,
        categories: webinar.categories,
        date: webinar.date,
        time: webinar.time,
        penyelenggara: webinar.penyelenggara,
        cost: webinar.cost,
        profile_img: webinar.profile_img,
        webinar_img: webinar.webinar_img,
        webinar_link: webinar.webinar_link,
        id_penyelenggara: webinar.id_penyelenggara,
      });

      setPreview(webinar.webinar_img);

      return;
    }

    navigation("/penyelenggara/dashboard");
    return false;
  }, [webinarData]);

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

      dispatch(fetchWebinars("seleksi"));
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
            elHTML={"input"}
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
            elHTML={"input"}
          />
          <InputRegister
            title={"Deskripsi"}
            name={"description"}
            placeholder={"UI/UX Rules"}
            required={true}
            preLabel={false}
            type={"text"}
            elHTML={"textarea"}
            value={webinarData.description}
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
            elHTML={"input"}
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
              elHTML={"input"}
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
              elHTML={"input"}
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
              elHTML={"input"}
            />
          </div>

          <SelectRegister
            title={"Kategori"}
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

          <InputRegister
            title={"Link Webinar"}
            name={"webinar_link"}
            placeholder={"https://www.zoom.com"}
            required={true}
            preLabel={false}
            type={"text"}
            elHTML={"input"}
            value={webinarData.webinar_link}
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
