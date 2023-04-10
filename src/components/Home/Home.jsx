import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import Categories from "./Categories/Categories";
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/public/categories.json")
      .then((res) => res.json())
      .then((data) => setData(data.job_categories));
  }, []);

  return (
    <>
      <HomeBanner></HomeBanner>
      {data.map((data) => (
        <Categories key={data.id} data={data}></Categories>
      ))}
    </>
  );
};

export default Home;
