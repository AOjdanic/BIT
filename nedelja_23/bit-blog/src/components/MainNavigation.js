import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";
function MainNavigation() {
  return (
    <header>
      <div className="container">
        <nav className={styles.navigation}>
          <div>
            <h1>BIT BLOG</h1>
          </div>
          <ul className={styles.list}>
            <li>
              <NavLink to="">Home</NavLink>
            </li>
            <li>
              <NavLink to="/authors">Authors</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
