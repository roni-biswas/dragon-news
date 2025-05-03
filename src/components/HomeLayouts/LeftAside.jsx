import React, { Suspense } from "react";
import Categories from "../Categories";
import Loading from "../Loading";

const LeftAside = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Categories />
      </Suspense>
    </>
  );
};

export default LeftAside;
