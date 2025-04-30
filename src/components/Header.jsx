import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <img src={logo} alt="dragon news logo" />
      <p>Journalism Without Fear or Favour</p>
    </div>
  );
};

export default Header;
