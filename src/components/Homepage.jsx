import React from "react";
import Cards from "./Cards";
import Filters from "./Filters/Filters.jsx";
import Header from "./Header";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Filters />
      <Cards />
    </div>
  );
};

export default Homepage;
