import React from "react";
import { useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>This is an category news - {id}</h1>
    </div>
  );
};

export default CategoryNews;
