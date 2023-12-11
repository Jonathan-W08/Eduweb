import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "./Cards";
import Filters from "./Filters/Filters.jsx";
import Header from "./Header";

const Homepage = () => {
  const [filterActive, setFilterActive] = useState({
    "IT Development": true,
    Bisnis: true,
    Marketing: true,
    "Bahasa Inggris": true,
    "Self Development": true,
  });

  const changeFilterActive = (selected) => {
    setFilterActive((prev) => {
      return { ...prev, [selected]: !prev[selected] };
    });
  };

  return (
    <div>
      <Header />
      <Filters
        filterActive={filterActive}
        changeFilterActive={changeFilterActive}
      />
      <Cards filterActive={filterActive} />
    </div>
  );
};

export default Homepage;
