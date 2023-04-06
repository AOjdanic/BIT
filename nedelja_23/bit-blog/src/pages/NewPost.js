import React from "react";
import styles from "./NewPost.module.css";
import { useNavigate } from "react-router-dom";
function NewPost() {
  let navigate = useNavigate();
  const fakeSubmitHandler = () => {
    navigate("/");
  };
  return (
    <section className={`container ${styles["new-post-wrap"]}`}>
      <h2>NEW POST</h2>
      <article>
        <div className={styles["new-post-div"]}>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" placeholder="Post title" />
        </div>
        <div className={styles["new-post-div"]}>
          <label htmlFor="content">Content</label>
          <textarea name="content" id="content"></textarea>
        </div>
        <div className={styles["buttons-div"]}>
          <button onClick={fakeSubmitHandler}>Cancel</button>
          <button onClick={fakeSubmitHandler}>Save</button>
        </div>
      </article>
    </section>
  );
}

export default NewPost;
