import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";
import NavCategories from "../../navCategories";
import { CgArrowLongRight, CgArrowLongLeft } from "react-icons/cg";

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
          <Link href="/" scroll={false}>
            <a>Next News</a>
          </Link>
        </div>
        <h5 className={styles.header__date}>{datetime}</h5>
      </header>
      <div className={styles.arrow_container}>
        <CgArrowLongLeft className={styles.arrow} />
        <CgArrowLongRight className={styles.arrow} />
      </div>
      {/* Links data mapped to produce each nav link */}
      <div className={styles.links_container}>
        <ul className={styles.links}>
          {NavCategories.map((category) => {
            return (
              // scroll={false} to stop auto scroll to top - makes animations smoother
              <Link href={category.url} key={category.id} scroll={false}>
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
