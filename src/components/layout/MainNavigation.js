import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>Best Quotes ever! You will see..</div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink to="/quotes">All Quotes</NavLink>
            </li>
            <li>
              <NavLink to="/new-quote">Add a Quote</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainNavigation;
