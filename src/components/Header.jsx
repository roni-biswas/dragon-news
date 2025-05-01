import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <img src={logo} alt="dragon news logo" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p>Sunday, November 27, 2025</p>
      <p className="text-accent text-semibold">
        {format(new Date(), "EEEE, MMMM dd, yyyy")}
      </p>
    </div>
  );
};

export default Header;
