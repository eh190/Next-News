import React from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <>
      <header className={styles.main}>
        <div className={styles.logo}>
          <Link href="/">
            <a>Next News</a>
          </Link>
        </div>
      </header>
      <nav>
        <div className={styles.links_container}>
          <ul className={styles.links}>
            <Link href="/uk">
              <a className={styles.links__item}>UK</a>
            </Link>
            <Link href="/business">
              <a className={styles.links__item}>BUSINESS</a>
            </Link>
            <Link href="/tech">
              <a className={styles.links__item}>TECH</a>
            </Link>
            <Link href="/sport">
              <a className={styles.links__item}>SPORT</a>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
