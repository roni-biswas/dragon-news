import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";
import LeftAside from "../components/HomeLayouts/LeftAside";
import RightAside from "../components/HomeLayouts/RightAside";

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
      <main className="w-11/12 mx-auto my-4 grid grid-cols-12 gap-6">
        <aside className="col-span-3">
          <LeftAside />
        </aside>
        <section className="main col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </>
  );
};

export default MainLayout;
