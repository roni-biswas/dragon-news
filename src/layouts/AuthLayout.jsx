import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="w-11/12 mx-auto py-6">
        <NavBar />
      </header>
      <main className="w-11/12 mx-auto py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
