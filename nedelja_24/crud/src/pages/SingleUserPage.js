import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function SingleUserPage() {
  const [userData, setUserData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);
  return (
    <form>
      <input type="number" value={userData?.id} />
      <input type="text" value={userData?.name} />
      <input type="text" value={userData?.email} />
      <input type="text" value={userData?.address?.city} />
    </form>
  );
}

export default SingleUserPage;
