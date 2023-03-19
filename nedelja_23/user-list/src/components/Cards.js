import Card from "./Card.js";
import "./Cards.css";
export default function Cards(props) {
  return (
    <div className="cards">
      {props.users.map((user) => (
        <Card
          image={user.imageMed}
          name={user.name}
          email={user.email}
          birthDate={user.birthDate}
        />
      ))}
    </div>
  );
}
