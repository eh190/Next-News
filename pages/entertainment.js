import Content from "../components/Content/Content";
import Head from "next/head";

const Entertainment = ({ data }) => {
  return (
    <main className="main">
      <Head>
        <title>Top Entertainment Headlines UK</title>
        <meta
          name="description"
          content="The latest entertainment headlines from the UK"
        />
      </Head>
      <h1 className="pageTitle">Entertainment News</h1>
      <hr className="line" />
      <Content data={data} />
    </main>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=gb&category=entertainment&pageSize=17",
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

export default Entertainment;
