import styles from "./Main.module.css";
import { useEffect, useState } from "react";
import UserList from "./UserList";
import UserListItem from "./UserListItem";
import UserCards from "./UserCards";
import UserCard from "./UserCard";
import Loader from "./Loader";
export default function Main(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=15`)
      .then((res) => res.json())
      .then((fetchedData) => {
        console.log(fetchedData.results);
        setData(fetchedData.results);
        setIsLoading(false);
      });
  }, []);
  return (
    <main>
      <div className="container">
        {isLoading && <Loader />}
        {!isLoading && (
          <div className={styles["search-holder"]}>
            <ion-icon name="search-sharp"></ion-icon>
            <input placeholder="Search users" type="text" />
          </div>
        )}
        {!isLoading && props.isList && (
          <UserList>
            {data &&
              data.map((user, i) => (
                <UserListItem key={user.id?.value ?? i} person={user} />
              ))}
          </UserList>
        )}
        {!isLoading && !props.isList && (
          <UserCards>
            {data &&
              data.map((user, i) => (
                <UserCard key={user.id?.value ?? i} person={user} />
              ))}
          </UserCards>
        )}
      </div>
    </main>
  );
}
