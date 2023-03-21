import styles from "./Article.module.css";
const heartIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="gray"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="gray"
    className={styles["heart-icon"]}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
  </svg>
);

const userIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="gray"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="gray"
    className={styles["user-icon"]}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />
  </svg>
);

const clockIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="gray"
    className={styles["clock-icon"]}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default function Article(props) {
  let timestamp = Math.floor(
    (Date.now() - props.data.time * 1000) / (1000 * 3600)
  );

  return (
    <main className={styles.article}>
      <div className={styles["title-placeholder"]}>
        <h2>
          <a target="_blank" href={props.data.url}>
            {props.index}. {props.data.title}
          </a>
        </h2>
      </div>
      <div className={styles["article-data"]}>
        <p className={styles.scores}>
          {heartIcon} {props.data.score}
        </p>

        <p className={styles.owner}>
          {userIcon}
          {props.data.by}
        </p>

        <p className={styles.clock}>
          {clockIcon}
          {`${
            timestamp == 0 ? "less than one hour" : `${timestamp} hours`
          } ago`}
        </p>
        <p className={styles.comments}>{`${
          props.data?.descendants ?? "0"
        } comments`}</p>
      </div>
    </main>
  );
}
