import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>This is the news app homepage</h1>
      </div>
    </>
  );
}
