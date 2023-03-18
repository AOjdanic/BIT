import DateComponent from "./DateComponent";
import Email from "./Email";
import "./UserPost.css";

export default function UserPost(props) {
  return (
    <div className="user-placeholder">
      <img className="user-image" src={props.image} alt="person" />
      <div className="user-data">
        <p>Name: {props.name} </p>
        <Email email={props.email} />
        <DateComponent birthDate={props.birthDate} />
      </div>
    </div>
  );
}
