import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <>
      <header className="max-w-screen-2xl mx-auto">
        <Header />
        <section className="w-11/12 mx-auto my-4">
          <LatestNews />
        </section>
        <nav className="w-11/12 mx-auto my-4">
          <NavBar />
        </nav>
      </header>
      <main>
        <section className="left_nav"></section>
        <section className="main">
          <Outlet />
        </section>
        <section className="right_nav"></section>
      </main>
    </>
  );
};

export default MainLayout;
