import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";
import NavCategories from "../../navCategories";

const Navbar = () => {
  const router = useRouter();

  //Get current data and time
  let currentdate = new Date();
  let datetime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear();

  return (
    <nav className={styles.main}>
      <header className={styles.header}>
        <div className={styles.header__logo}>
          <Link href="/">
            <a>Next News</a>
          </Link>
        </div>
        <div className={styles.header__date}>
          <h5>{datetime}</h5>
        </div>
      </header>
      {/* Links data mapped to produce each nav link */}
      <div className={styles.links_container}>
        <ul className={styles.links}>
          {NavCategories.map((category) => {
            return (
              <Link href={category.url}>
                <a
                  className={`${styles.links__item} ${
                    router.pathname === category.url ? styles.active : ""
                  }`}
                >
                  {category.title}
                </a>
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
