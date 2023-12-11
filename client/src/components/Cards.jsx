import Card from "./Card";
import { useSelector } from "react-redux";

const Cards = (props) => {
  // Data webinars
  const webinars = useSelector((state) => state.webinars.webinars);

  return (
    <div className="grid grid-cols-1 gap-3 p-3 mt-6 sm:p-6 sm:mt-0 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 xl:grid-cols-4 xl:px-12">
      {webinars.map((webinar) => {
        return props.filterActive[webinar.categories] ? (
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
        ) : (
          false
        );
      })}
    </div>
  );
};

export default Cards;
