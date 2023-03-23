import styles from "./LoginForm.module.css";
import { useState } from "react";
export default function LoginForm() {
  const [usernameInput, setUsernameInput] = useState(null);
  const [passwordInput, setPasswordInput] = useState(null);
  const usernameHandler = (e) => {
    setUsernameInput(e.target.value);
  };
  const passwordHandler = (e) => {
    setPasswordInput(e.target.value);
  };
  const loginHandler = (e) => {
    e.preventDefault();

    alert(`${usernameInput}
           ${passwordInput}`);
    setPasswordInput("");
    setUsernameInput("");
  };
  const resetHandler = (e) => {
    e.preventDefault();
    setPasswordInput("");
    setUsernameInput("");
  };
  return (
    <form className={styles.form}>
      <h2>Login</h2>
      <input
        value={usernameInput}
        onChange={usernameHandler}
        type="text"
        placeholder="username"
      />
      <input
        value={passwordInput}
        onChange={passwordHandler}
        type="password"
        placeholder="password"
      />
      <button onClick={loginHandler} className={styles.login} type="submit">
        login
      </button>
      <button onClick={resetHandler} className={styles.reset}>
        reset
      </button>
    </form>
  );
}
