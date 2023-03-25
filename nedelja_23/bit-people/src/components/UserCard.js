import styles from "./UserCard.module.css";
import BirthDate from "./BirthDate";
import Email from "./Email";

export default function UserCard(props) {
  return (
    <div
      className={`${styles.card} ${
        props.person.gender === "female" ? "reddish" : ""
      }`}
    >
      <div className={styles["img-holder"]}>
        <img src={props.person.picture.large} alt="person profile" />
        <span>{props.person.name.first}</span>
      </div>
      <div className={styles["data-holder"]}>
        <Email iconHidden={true} mailAddress={props.person.email} />
        <BirthDate iconHidden={true} birthday={props.person.dob.date} />
      </div>
    </div>
  );
}
