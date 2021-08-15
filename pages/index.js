import Head from "next/head";
import Content from "../components/Content/Content";

export default function Home({ data }) {
  return (
    <div className="main">
      <Head>
        <title>Top Headlines UK</title>
        <meta
          name="description"
          content="The latest summary of headlines from the UK"
        />
      </Head>
      <h1 className="pageTitle">UK</h1>
      <hr className="line" />
      <Content data={data} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=gb&pageSize=17",
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
    //Refreshes the fetch every hour to rebuild page with new stories
    revalidate: 60 * 60,
  };
};
