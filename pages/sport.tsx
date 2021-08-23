import Content from "../components/Content/Content";
import Head from "next/head";
import { Data } from "../types";
import { GetStaticProps } from "next";

const Sport = ({ data }: { data: Data }) => {
  return (
    <>
      <Head>
        <title>Top Sport Headlines UK</title>
        <meta
          name="description"
          content="The latest sport headlines from the UK"
        />
      </Head>
      <Content {...data} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let data = {};
  try {
    const res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=gb&category=sport&pageSize=17",
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

export default Sport;
