import React, { use } from "react";

const categoriesPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoriesPromise);

  return (
    <div>
      <h2 className="text-primary font-semibold text-xl">
        All Categories ({categories.length})
      </h2>
    </div>
  );
};

export default Categories;
