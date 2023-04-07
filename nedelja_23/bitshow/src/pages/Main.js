import React, { useState, useEffect } from "react";
import styles from "./Main.module.css";
import Card from "../components/Card";
import stylesSearch from "../components/Search.module.css";
import Error from "../components/ErrorPrompt";
let searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={stylesSearch.icon}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
);
function Main() {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("");
  const fetchShows = async () => {
    const res = await fetch(`http://api.tvmaze.com/shows`);
    let data = await res.json();
    data = data
      .sort((a, b) => b.rating.average - a.rating.average)
      .slice(0, 50);
    setShows(data);
  };
  useEffect(() => {
    fetchShows();
  }, []);
  let filteredShows = shows.filter((movie) =>
    movie.name.toLowerCase().includes(query.toLowerCase())
  );
  const inputHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <div className={stylesSearch["search-wrap"]}>
        {searchIcon}
        <input
          value={query}
          onChange={inputHandler}
          className={stylesSearch.search}
          type="text"
          placeholder="Search shows"
        />
      </div>
      {filteredShows.length === 0 && <Error />}
      <section className={styles["main-section"]}>
        {filteredShows.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </section>
    </>
  );
}

export default Main;
