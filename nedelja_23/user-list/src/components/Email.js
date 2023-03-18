export default function Email(props) {
  let replaceString = props.email.slice(3, props.email.indexOf("@"));
  let newString = "";
  for (let i = 0; i < replaceString.length; i++) newString += "*";
  const email = props.email.replace(replaceString, newString);
  return <p>Email: {email} </p>;
}
