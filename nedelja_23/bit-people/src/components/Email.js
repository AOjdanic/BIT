import styles from "./Email.module.css";

export default function Email(props) {
  let mail = props.mailAddress;
  let replaceString = mail.slice(3, mail.indexOf("@") - 3);
  mail = mail.replace(replaceString, "...");

  return (
    <p className={styles["mail-holder"]}>
      {!props.iconHidden && <ion-icon name="mail-sharp"></ion-icon>}
      {mail}
    </p>
  );
}
