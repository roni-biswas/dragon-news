import React, { Suspense } from "react";
import Categories from "../Categories";

const LeftAside = () => {
  return (
    <>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Categories />
      </Suspense>
    </>
  );
};

export default LeftAside;
