import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import styles from "./SinglePost.module.css";
export default function SinglePost() {
  const [singlePost, setSinglePost] = useState({});
  const [singleUser, setSingleUser] = useState({});
  const [allPosts, setAllPosts] = useState([]);
  const { postid } = useParams();
  const fetchAllPosts = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    const data = await res.json();
    console.log(data);
    setAllPosts(data);
  };
  const fetchSinglePostDetails = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postid}`
    );
    const data = await res.json();
    console.log(data);
    setSinglePost(data);
  };
  const fetchUserDetails = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${singlePost.userId}`
    );
    const data = await res.json();
    console.log(data);
    setSingleUser(data);
  };
  useEffect(() => {
    fetchUserDetails();
  }, [singlePost]);

  useEffect(() => {
    Promise.all([fetchAllPosts(), fetchSinglePostDetails()]);
  }, [postid]);
  return (
    <>
      <div className={`container ${styles["singlepost-container"]} `}>
        <div>
          <h2>{singlePost.title}</h2>
          <Link
            className={styles["user-link"]}
            to={`/authors/${singleUser.id}`}
          >
            {singleUser.name}
          </Link>

          <p>{singlePost.body}</p>
        </div>
        <div>
          <h3>more posts from same author</h3>
        </div>
        <div className={styles["link-wrap"]}>
          {allPosts
            .filter((post) => post.userId === singlePost.userId)
            .map((post) => (
              <Link key={post.id} to={`/posts/${post.id}`}>
                {post.title}
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
