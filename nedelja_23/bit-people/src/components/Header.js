import styles from "./Header.module.css";
export default function Header(props) {
  const listHandler = () => {
    props.setIsList(true);
    localStorage.removeItem("isList");
    localStorage.setItem("isList", "1");
  };
  const gridHandler = () => {
    props.setIsList(false);
    localStorage.removeItem("isList");
    localStorage.setItem("isList", "0");
  };
  const refreshHandler = () => {
    localStorage.removeItem("users");
    window.location.reload();
  };

  const titleHandler = () => {
    props.onAboutClick(false);
  };

  const aboutHandler = () => {
    props.onAboutClick(true);
  };
  return (
    <header className={styles.header}>
      <div className={`${styles.headContainer} container`}>
        <h2 onClick={titleHandler}>BIT People</h2>
        <ul className={styles.nav}>
          <li onClick={aboutHandler}>About</li>
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
