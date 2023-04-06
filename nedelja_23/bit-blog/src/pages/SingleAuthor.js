import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./SingleAuthor.module.css";
export default function SingleAuthor() {
  const [authorData, setAuthorData] = useState({});
  const { authorid } = useParams();

  const fetchUserObj = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${authorid}`
    );
    const data = await res.json();
    console.log(data);
    setAuthorData(data);
  };

  useEffect(() => {
    fetchUserObj();
  }, []);
  return (
    <div className={`container ${styles["singleauthor-wrap"]}`}>
      <article>
        <div className={styles["img-wrap"]}>
          <img
            className={styles.img}
            src="https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"
            alt="wasnt provided with an api where we have images"
          />
        </div>
        <div>
          <h2>{authorData?.name?.toUpperCase()}</h2>
          <p>username: {authorData?.username}</p>
          <p>email: {authorData?.email}</p>
          <p>phone: {authorData?.phone}</p>
        </div>
      </article>
      <article>
        <div>
          <h2>Address</h2>
          <p>street: {authorData?.address?.street} </p>
          <p>city: {authorData?.address?.city}</p>
          <p>zipcode: {authorData?.address?.zipcode} </p>
        </div>
        <div className={styles["img-wrap"]}>
          <iframe
            width="100%"
            height="100%"
            title={authorData?.address?.city}
            style={{ border: 0 }}
            src={`https://maps.google.com/maps?q=${authorData?.address?.geo?.lat},${authorData?.address?.geo?.lng}&z=15&output=embed`}
          />
        </div>
      </article>
      <article>
        <div>
          <h2>Company</h2>
          <p>name: {authorData?.company?.name} </p>
          <p>slogan: {authorData?.company?.catchPhrase} </p>
        </div>
      </article>
    </div>
  );
}
