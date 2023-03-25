import styles from "./UserListItem.module.css";
import Email from "./Email";
import BirthDate from "./BirthDate";

export default function UserListItem(props) {
  return (
    <li
      className={`${styles["list-item"]} ${
        props.person.gender === "female" ? "reddish" : ""
      }`}
    >
      <img src={props.person.picture.thumbnail} alt="person profile" />
      <div>
        <p>
          {props.person.name.first} {props.person.name.last}
        </p>
        <Email iconHidden={false} mailAddress={props.person.email} />
        <BirthDate iconHidden={false} birthday={props.person.dob.date} />
      </div>
    </li>
  );
}
