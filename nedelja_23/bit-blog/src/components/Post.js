import styles from "./Post.module.css";
import { useNavigate } from "react-router-dom";
export default function Post({ title, body, postId, showBody }) {
  let navigate = useNavigate();
  const articleDetailsOpener = (e) => {
    const postId = e.target.dataset.key;
    navigate(`/posts/${postId}`);
  };

  return (
    <article className={styles["post-wrap"]}>
      <h3
        data-key={postId}
        onClick={articleDetailsOpener}
        className={styles.title}
      >
        {title}
      </h3>
      <p className={styles.body}>{body}</p>
    </article>
  );
}
