import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";
import LeftAside from "../components/HomeLayouts/LeftAside";
import RightAside from "../components/HomeLayouts/RightAside";
import Loading from "../components/Loading";

const MainLayout = () => {
  const { state } = useNavigation();
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
        <aside className="col-span-3 sticky top-2 h-fit">
          <LeftAside />
        </aside>
        <section className="main col-span-6">
          {state === "loading" ? <Loading /> : <Outlet />}
        </section>
        <aside className="col-span-3 sticky top-2 h-fit">
          <RightAside />
        </aside>
      </main>
    </>
  );
};

export default MainLayout;
