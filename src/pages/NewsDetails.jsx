import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import RightAside from "../components/HomeLayouts/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const newsDetails = data.find((news) => news.id === id);
    setNews(newsDetails);
  }, [id, data]);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="w-11/12 mx-auto my-4 grid grid-cols-12 gap-6">
        <section className="main col-span-9">
          {/* news details */}
          <h2 className="text-primary font-semibold text-xl mb-6">
            Dragon News
          </h2>
          <NewsDetailsCard news={news} />
        </section>
        <aside className="col-span-3 sticky top-2 h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
