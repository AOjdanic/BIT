import React, { useEffect, useState } from "react";
import TableRow from "../components/TableRow";
import { useNavigate } from "react-router-dom";
function UsersPage({ passedUser }) {
  let navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();
    let filterData = data.map((obj) => {
      return {
        id: obj.id,
        name: obj.name,
        email: obj.email,
        city: obj.address.city,
      };
    });
    console.log(filterData);
    setUsers(filterData);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const redirectToCreation = () => {
    navigate("/users/create");
  };
  return (
    <>
      <button className="create-button" onClick={redirectToCreation}>
        Create
      </button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <TableRow key={user.id} user={user} />
          ))}
          {passedUser &&
            [passedUser].map((user) => <TableRow key={user.id} user={user} />)}
        </tbody>
      </table>
    </>
  );
}

export default UsersPage;
