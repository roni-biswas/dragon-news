import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-4 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee className="flex gap-3 p-5" pauseOnHover={true} speed={60}>
        <p className="font-semibold text-[18px] text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          explicabo. Nesciunt rem repellat saepe accusantium?
        </p>
        <p className="font-semibold text-[18px] text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="font-semibold text-[18px] text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          explicabo. Nesciunt rem repellat saepe accusantium?
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
