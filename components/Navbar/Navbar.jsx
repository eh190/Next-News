import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className={styles.main}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <a>Next News</a>
          </Link>
        </div>
      </header>
      <div className={styles.links_container}>
        <ul className={styles.links}>
          <Link href="/">
            <a
              className={`${styles.links__item} ${
                router.pathname === "/" ? styles.active : ""
              }`}
            >
              Home
            </a>
          </Link>
          <Link href="/uk">
            <a
              className={`${styles.links__item} ${
                router.pathname === "/uk" ? styles.active : ""
              }`}
            >
              UK
            </a>
          </Link>
          <Link href="/business">
            <a
              className={`${styles.links__item} ${
                router.pathname === "/business" ? styles.active : ""
              }`}
            >
              BUSINESS
            </a>
          </Link>
          <Link href="/tech">
            <a
              className={`${styles.links__item} ${
                router.pathname === "/tech" ? styles.active : ""
              }`}
            >
              TECH
            </a>
          </Link>
          <Link href="/sport">
            <a
              className={`${styles.links__item} ${
                router.pathname === "/sport" ? styles.active : ""
              }`}
            >
              SPORT
            </a>
          </Link>
          <Link href="/sport">
            <a
              className={`${styles.links__item} ${
                router.pathname === "/sport" ? styles.active : ""
              }`}
            >
              SPORT
            </a>
          </Link>
          <Link href="/sport">
            <a
              className={`${styles.links__item} ${
                router.pathname === "/sport" ? styles.active : ""
              }`}
            >
              SPORT
            </a>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
