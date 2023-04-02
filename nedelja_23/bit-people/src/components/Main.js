import styles from "./Main.module.css";
import { useEffect, useState, useCallback } from "react";
import UserList from "./UserList";
import UserListItem from "./UserListItem";
import UserCards from "./UserCards";
import UserCard from "./UserCard";
import Error from "./Error";

export default function Main(props) {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const fetchUsers = useCallback(async function () {
    const res = await fetch(`https://randomuser.me/api/?results=15`);
    let { results } = await res.json();
    setData(results);
    setFilterData(results);
    setIsLoading(false);
    localStorage.setItem("users", JSON.stringify(results));
  }, []);
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem("users")) {
      setTimeout(() => {
        setData(JSON.parse(localStorage.getItem("users")));
        setFilterData(JSON.parse(localStorage.getItem("users")));
        setIsLoading(false);
      }, 600);
    } else {
      setTimeout(fetchUsers, 600);
    }
  }, []);

  useEffect(() => {
    setFilterData(
      data.filter((user) => {
        let fullName = `${user.name.first.toLowerCase()} ${user.name.last.toLowerCase()}`;
        return fullName.includes(inputValue);
      })
    );
  }, [inputValue]);

  return (
    <main>
      <div className="container">
        {!isLoading && (
          <div className={styles["search-holder"]}>
            <ion-icon name="search-sharp"></ion-icon>
            <input
              value={inputValue}
              placeholder="Search users"
              onChange={inputHandler}
              type="text"
            />
          </div>
        )}
        {!isLoading && !filterData.length === 0 && (
          <div
            style={{
              display: "flex",
              gap: "1rem",
              fontSize: "2rem",
              justifyContent: "flex-end",
              color: "#777",
            }}
          >
            <p>
              Male:{filterData.filter((user) => user.gender === "male").length}
            </p>
            <p>
              Female:
              {filterData.filter((user) => user.gender === "female").length}
            </p>
          </div>
        )}
        {!isLoading && props.isList && (
          <UserList>
            {filterData &&
              filterData.map((user, i) => (
                <UserListItem key={user.id?.value ?? i} person={user} />
              ))}
          </UserList>
        )}
        {!isLoading && !props.isList && (
          <UserCards>
            {filterData &&
              filterData.map((user, i) => (
                <UserCard key={user.id?.value ?? i} person={user} />
              ))}
          </UserCards>
        )}
        {!isLoading && filterData.length === 0 && <Error />}
      </div>
    </main>
  );
}
