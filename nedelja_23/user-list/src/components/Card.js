import DateComponent from "./DateComponent";
import Email from "./Email";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-img-box">
        <img className="card-image" src={props.image} alt="person" />
      </div>
      <div className="card-data-box">
        <p className="username">{props.name} </p>
        <Email email={props.email} />
        <DateComponent birthDate={props.birthDate} />
      </div>
    </div>
  );
}
