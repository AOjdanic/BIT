import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Show.module.css";
import Loader from "../components/Loader";

function Show() {
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [listDisplay, setListDisplay] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const fetchSingleMovieData = async () => {
    const res = await fetch(`http://api.tvmaze.com/shows/${id}`);
    const data = await res.json();
    setMovie(data);
  };

  const fetchCast = async () => {
    const res = await fetch(`http://api.tvmaze.com/shows/${id}/cast`);
    const data = await res.json();
    setCast(data);
  };

  useEffect(() => {
    setListDisplay(
      localStorage.getItem("listDisplay") === "false" ? false : true
    );
    if (localStorage.getItem("listDisplay") === null) setListDisplay(false);
    Promise.all([fetchSingleMovieData(), fetchCast()]);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const setListView = () => {
    localStorage.removeItem("listDisplay");
    setListDisplay(true);
    localStorage.setItem("listDisplay", true);
  };
  const setGridView = () => {
    localStorage.removeItem("listDisplay");
    setListDisplay(false);
    localStorage.setItem("listDisplay", false);
  };
  return (
    <section className={styles["movie-wrapper"]}>
      {isLoading && <Loader />}
      {!isLoading && (
        <article className={styles["movie-img-wrapper"]}>
          <img
            className={styles["movie-img"]}
            src={movie?.image?.original}
            alt=""
          />
        </article>
      )}
      {!isLoading && (
        <article className={styles["movie-details-wrapper"]}>
          <h2 className={styles["movie-title"]}>
            {movie?.name?.toUpperCase()}
          </h2>
          <div className={styles["movie-genre-wrapper"]}>
            {movie?.genres?.map((genre) => (
              <span className={styles["movie-genre"]} key={genre}>
                {genre}
              </span>
            ))}
          </div>
          <p
            className={styles["movie-description"]}
            dangerouslySetInnerHTML={{ __html: `${movie?.summary}` }}
          />
        </article>
      )}
      {!isLoading && (
        <article className={styles["movie-cast-wrapper"]}>
          <div className={styles["icons-wrapper"]}>
            <h3>{listDisplay ? "ACTORS" : "CAST"}</h3>
            {listDisplay && (
              <span onClick={setGridView}>
                <ion-icon name="grid-outline"></ion-icon>
              </span>
            )}
            {!listDisplay && (
              <span onClick={setListView}>
                <ion-icon name="list-outline"></ion-icon>
              </span>
            )}
          </div>

          <div
            className={
              listDisplay
                ? styles["movie-cast-display-list"]
                : styles["movie-cast-display-div"]
            }
          >
            {cast?.slice(0, 6)?.map((member) => (
              <div key={member.person.id} className={styles["cast-div"]}>
                <img src={member.person.image.medium} />
                <p>{member.person.name}</p>
              </div>
            ))}
          </div>
        </article>
      )}
    </section>
  );
}

export default Show;
