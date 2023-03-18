import Card from "./Card.js";
import "./Cards.css";
export default function Cards(props) {
  return (
    <div className="cards">
      <Card
        image={props.users[0].imageMed}
        name={props.users[0].name}
        email={props.users[0].email}
        birthDate={props.users[0].birthDate}
      />
      <Card
        image={props.users[1].imageMed}
        name={props.users[1].name}
        email={props.users[1].email}
        birthDate={props.users[1].birthDate}
      />
      <Card
        image={props.users[2].imageMed}
        name={props.users[2].name}
        email={props.users[2].email}
        birthDate={props.users[2].birthDate}
      />
      <Card
        image={props.users[3].imageMed}
        name={props.users[3].name}
        email={props.users[3].email}
        birthDate={props.users[3].birthDate}
      />
      <Card
        image={props.users[4].imageMed}
        name={props.users[4].name}
        email={props.users[4].email}
        birthDate={props.users[4].birthDate}
      />
      <Card
        image={props.users[5].imageMed}
        name={props.users[5].name}
        email={props.users[5].email}
        birthDate={props.users[5].birthDate}
      />
    </div>
  );
}
