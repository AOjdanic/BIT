import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
function Home() {
  let navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
    setPosts(data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  const newPostHandler = () => {
    navigate("/posts/new");
  };
  return (
    <div className="container">
      <h2 className={styles.posts}>POSTS</h2>
      {posts.slice(0, 10).map((post) => (
        <Post
          key={post.id}
          postId={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
      <button onClick={newPostHandler} className={styles["new-post-btn"]}>
        New Post
      </button>
    </div>
  );
}

export default Home;
