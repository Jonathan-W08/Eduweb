import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { Card } from "flowbite-react";
import { Accordion } from "flowbite-react";
import { MdDateRange } from "react-icons/md";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";
import { IoTicketSharp } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const DetailWebinar = () => {
  const { id } = useParams();
  const navigation = useNavigate();

  // Webinars Data
  const webinars = useSelector((props) => props.webinars.webinars);

  // Webinar Data
  const [webinarData, setWebinarData] = useState("");

  useEffect(() => {
    const webinar = webinars.find((webinar) => webinar.id === id);
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

      return;
    }
    navigation("/not-found");
  }, []);

  return webinarData ? (
    <div className="flex flex-row p-8 gap-10">
      <div className="flex flex-row justify-between w-3/5">
        <Card className="sm" imgAlt="" imgSrc={webinarData.webinar_img}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Deskripsi
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {webinarData.description}
          </p>
          <div>
            <h1 className="text-xl"> Link Webinar: </h1>
            <Link to={webinarData.webinar_link} target="_blank">
              {webinarData.webinar_link}
            </Link>
          </div>
          <div className="flex justify-center">
            <Button className="bg-midBlue w-64" as={Link} to={"/homepage"}>
              Menyimpanan Webinar
            </Button>
          </div>
        </Card>
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div>
          <Card href="#" className="w-100">
            <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {webinarData.title}
            </h5>
            <ul>
              <li
                className="flex items-center mt gap-3"
                style={{ fontSize: "25px", lineHeight: "1.5" }}
              >
                {" "}
                <MdDateRange /> {webinarData.date}{" "}
              </li>
              <li
                className="flex items-center mt gap-3"
                style={{ fontSize: "25px", lineHeight: "1.5" }}
              >
                <MdOutlineAccessTimeFilled /> {webinarData.time}
              </li>
              <li
                className="flex items-center mt gap-3"
                style={{
                  borderBottom: "5px solid #000",
                  fontSize: "25px",
                  lineHeight: "1.5",
                }}
              >
                <RiComputerFill /> {webinarData.categories}
              </li>
            </ul>

            <div className="flex items-center mt-4">
              <img className=" w-9" src={webinarData.profile_img} alt="logo" />
              <p className="text-xs ml-2 font-bold">
                {webinarData.penyelenggara}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  ) : (
    false
  );
};

export default DetailWebinar;
