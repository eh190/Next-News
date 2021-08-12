import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.main}>
      <div className={styles.logo}>
        <h1 className={styles.logo__title}>Next News</h1>
      </div>
      <div className={styles.links}>
        <Link href="/uk">
          <a>UK</a>
        </Link>
        <Link href="/business">
          <a>BUSINESS</a>
        </Link>
        <Link href="/tech">
          <a>TECH</a>
        </Link>
        <Link href="/sport">
          <a>SPORT</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
