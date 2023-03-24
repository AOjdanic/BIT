import { useEffect, useState } from "react";
import Frame from "./Frame";
import styles from "./Main.module.css";

export default function Main() {
  const [inputValue, setInputValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState(null);
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };
  const submitHandler = (e) => {
    if (e.key === "Enter") setSubmitted(!submitted);
  };
  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=zr3KnMZCiaCGigz5oURrTOZSjA0jVlMj&q=${inputValue}&limit=25&offset=0&rating=g&lang=en`
    )
      .then((res) => res.json())
      .then((dataObj) => {
        setData(dataObj.data);
        setInputValue("");
      });
  }, [submitted]);
  return (
    <main>
      <div className="container">
        <section className={styles["search-section"]}>
          <h3 className={styles.title}>Search Giphy</h3>
          <input
            value={inputValue}
            onChange={inputHandler}
            onKeyDown={submitHandler}
            className={styles["search-bar"]}
            type="text"
          />
        </section>
        <section>
          <div className="container grid grid--3-cols">
            {data &&
              data.map((gif) => <Frame key={gif.id} url={gif.embed_url} />)}
          </div>
        </section>
      </div>
    </main>
  );
}
