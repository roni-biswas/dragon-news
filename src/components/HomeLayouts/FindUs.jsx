import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="text-primary font-semibold text-xl mb-4">Find Us on</h2>
      <div className="join join-vertical w-full ">
        <button className="btn bg-base-100 justify-start text-accent font-medium text-base join-item">
          <FaFacebookF /> Facebook
        </button>
        <button className="btn bg-base-100 justify-start text-accent font-medium text-base join-item">
          <FaTwitter /> Twitter
        </button>
        <button className="btn bg-base-100 justify-start text-accent font-medium text-base join-item">
          <FaInstagram /> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
