import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
function CreateUserPage(props) {
  let navigate = useNavigate();
  const onSubmit = (e) => {
    let createdUser = {
      id: inputIdRef.current.value,
      name: inputNameRef.current.value,
      email: inputEmailRef.current.value,
      city: inputCityRef.current.value,
    };
    e.preventDefault();
    if (
      !inputNameRef.current.value.trim().length === 0 &&
      inputEmailRef.current.value.contains("@")
    )
      props.onCreateUser(createdUser);
    navigate("/users");
  };
  const inputIdRef = useRef();
  const inputNameRef = useRef();
  const inputEmailRef = useRef();
  const inputCityRef = useRef();
  return (
    <>
      <form onSubmit={onSubmit}>
        <input required ref={inputIdRef} type="number" placeholder="id" />
        <input required ref={inputNameRef} type="text" placeholder="name" />
        <input required ref={inputEmailRef} type="text" placeholder="email" />
        <input required ref={inputCityRef} type="text" placeholder="city" />
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default CreateUserPage;
