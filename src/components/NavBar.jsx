import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={userIcon} alt="user-icon" />
        <Link to="/auth/login" className="btn btn-primary px-10">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
