import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 gap-3 p-3 mt-6 sm:p-6 sm:mt-0 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 xl:grid-cols-4 xl:px-12">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Cards;
