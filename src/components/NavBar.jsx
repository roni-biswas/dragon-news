import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    signOutUser().then(() => {
      alert("User successfully logged out!");
    });
  };

  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.displayName}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img
          className="w-10 h-10 rounded-full"
          src={user ? (!user.photoURL ? userIcon : user.photoURL) : userIcon}
          alt="user-icon"
        />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
