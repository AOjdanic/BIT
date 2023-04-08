import React from "react";
import { useNavigate } from "react-router-dom";
function TableRow({ user }) {
  let navigate = useNavigate();
  const showUser = (e) => {
    navigate(`/users/${e.target.dataset.id}`);
  };
  return (
    <tr>
      <td>{user.id}</td>
      <td style={{ cursor: "pointer" }} onClick={showUser} data-id={user.id}>
        {user.name}
      </td>
      <td>{user.email}</td>
      <td>{user.city}</td>
    </tr>
  );
}

export default TableRow;
