export default function DateComponent(props) {
  const dateObj = new Date(props.birthDate);
  const month = dateObj.toLocaleString("en-us", { month: "long" });
  const day = dateObj.toLocaleString("en-us", { day: "2-digit" });
  const year = dateObj.getFullYear();
  const date = `${day}-${month}-${year}`;
  return <p>Date of birth: {date} </p>;
}
