import UserPost from "./UserPost.js";

export default function Users(props) {
  return (
    <div>
      <UserPost
        image={props.users[0].image}
        name={props.users[0].name}
        email={props.users[0].email}
        birthDate={props.users[0].birthDate}
      />
      <UserPost
        image={props.users[1].image}
        name={props.users[1].name}
        email={props.users[1].email}
        birthDate={props.users[1].birthDate}
      />
      <UserPost
        image={props.users[2].image}
        name={props.users[2].name}
        email={props.users[2].email}
        birthDate={props.users[2].birthDate}
      />
      <UserPost
        image={props.users[3].image}
        name={props.users[3].name}
        email={props.users[3].email}
        birthDate={props.users[3].birthDate}
      />
      <UserPost
        image={props.users[4].image}
        name={props.users[4].name}
        email={props.users[4].email}
        birthDate={props.users[4].birthDate}
      />
      <UserPost
        image={props.users[5].image}
        name={props.users[5].name}
        email={props.users[5].email}
        birthDate={props.users[5].birthDate}
      />
    </div>
  );
}
