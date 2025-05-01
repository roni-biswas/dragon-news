import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="border border-base-300 rounded-lg p-6 space-y-8">
      <img
        className="rounded-md w-full h-[400px] object-cover"
        src={news.image_url}
        alt={news.title}
      />
      <h1 className="text-2xl text-primary">{news.title}</h1>
      <p className="text-accent leading-8">{news.details}</p>
      <Link
        to={`/category/${news.category_id}`}
        className="btn text-base-100 bg-secondary px-3 py-2 inline-flex items-center gap-3"
      >
        <FaArrowLeft /> All news in this category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
