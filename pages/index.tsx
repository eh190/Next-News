import { GetStaticProps } from "next";
import Head from "next/head";
import Content from "../components/Content/Content";
import { Data } from "../types";

export default function Home({ data }: { data: Data }) {
  return (
    <>
      <Head>
        <title>Top Headlines UK</title>
        <meta
          name="description"
          content="The latest summary of headlines from the UK"
        />
      </Head>
      <Content {...data} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let data = {};
  try {
    const res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=gb&pageSize=17",
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
        },
      }
    );
    data = await res.json();
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      data: data,
    },
    //Refreshes the fetch every 12 hours to rebuild page with new stories
    revalidate: 60 * 60 * 12,
  };
};
