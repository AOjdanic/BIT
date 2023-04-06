import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Authors.module.css";
function Authors() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const fetchAllUsers = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
    const data = await res.json();
    console.log(data);
    setUsers(data);
  };
  const fetchAllPosts = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    const data = await res.json();
    console.log(data);
    setPosts(data);
  };
  useEffect(() => {
    Promise.all([fetchAllUsers(), fetchAllPosts()]);
  }, []);
  return (
    <div className={`container ${styles["authors-div"]}`}>
      <h2>AUTHORS {`(${users.length})`}</h2>
      {users.map((user) => (
        <Link to={`/authors/${user.id}`}>
          {`${user.name} (${
            posts.filter((post) => post.userId === user.id).length
          }-posts)`}
        </Link>
      ))}
    </div>
  );
}

export default Authors;
