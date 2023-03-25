import styles from "./Header.module.css";
export default function Header(props) {
  const listHandler = () => {
    props.setIsList(true);
  };
  const gridHandler = () => {
    props.setIsList(false);
  };
  const refreshHandler = () => {
    window.location.reload();
  };
  return (
    <header className={styles.header}>
      <div className={`${styles.headContainer} container`}>
        <h2>BIT People</h2>
        <ul className={styles.nav}>
          <li>About</li>
          <li onClick={refreshHandler}>
            <ion-icon name="refresh-outline"></ion-icon>
          </li>
          <li>
            <span
              onClick={listHandler}
              className={`${props.isList ? "hidden" : ""}`}
            >
              <ion-icon name="list-outline"></ion-icon>
            </span>
            <span
              onClick={gridHandler}
              className={`${props.isList ? "" : "hidden"}`}
            >
              <ion-icon name="grid-outline"></ion-icon>
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
}
