import Content from "../components/Content/Content";
import Head from "next/head";
import { Data } from "../types";
import { GetStaticProps } from "next";

const Business = ({ data }: { data: Data }) => {
  return (
    <main className="main">
      <Head>
        <title>Top Business Headlines UK</title>
        <meta
          name="description"
          content="The latest business headlines from the UK"
        />
      </Head>
      <h1 className="pageTitle">Business News</h1>
      <hr className="line" />
      <Content {...data} />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=gb&category=business&pageSize=13",
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );

  const data = await res.json();

  return {
    props: {
      data: data,
    },
    //Refreshes the fetch every 12 hours to rebuild page with new stories
    revalidate: 60 * 60 * 12,
  };
};

export default Business;
