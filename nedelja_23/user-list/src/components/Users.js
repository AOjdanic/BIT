import UserPost from "./UserPost.js";

export default function Users(props) {
  return (
    <div>
      {props.users.map((user) => (
        <UserPost
          image={user.image}
          name={user.name}
          email={user.email}
          birthDate={user.birthDate}
        />
      ))}
    </div>
  );
}
