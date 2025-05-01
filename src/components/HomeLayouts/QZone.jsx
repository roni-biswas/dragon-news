import React from "react";
import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playImg from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-300 p-4 rounded-md">
      <h2 className="text-primary font-semibold text-xl mb-4">Q-Zone</h2>
      <div className="space-y-5">
        <img src={swimmingImg} alt="swimming" />
        <img src={classImg} alt="Class" />
        <img src={playImg} alt="playground" />
      </div>
    </div>
  );
};

export default QZone;
