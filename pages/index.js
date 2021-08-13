import Head from "next/head";
import Image from "next/image";
import Content from "../components/Content/Content";
import styles from "../styles/Home.module.scss";

export const getServerSideProps = async () => {
  const res = await fetch("https://newsapi.org/v2/top-headlines?country=gb", {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
    },
  });

  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};

export default function Home({ data }) {
  return (
    <div className="main">
      <h1 className="pageTitle">UK</h1>
      <hr className="line" />
      <Content data={data} />
    </div>
  );
}
