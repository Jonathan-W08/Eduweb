import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Cards = () => {
  const [webinars, setWebinars] = useState([]);

  useEffect(() => {
    const getWebinars = async () => {
      try {
        const response = await axios.get("http://localhost:5000/");
        const data = await response.data;

        console.log(data);
        setWebinars(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    getWebinars();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-3 p-3 mt-6 sm:p-6 sm:mt-0 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 xl:grid-cols-4 xl:px-12">
      {webinars.map((webinar) => {
        return (
          <Card
            key={webinar.id}
            webinarImg={webinar.webinar_img}
            categories={webinar.categories}
            title={webinar.title}
            date={webinar.date}
            time={webinar.time}
            profileImg={webinar.profile_img}
            penyelenggara={webinar.penyelenggara}
            cost={webinar.cost}
          />
        );
      })}
    </div>
  );
};

export default Cards;
