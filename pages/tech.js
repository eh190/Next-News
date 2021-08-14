import Content from "../components/Content/Content";

const Tech = ({ data }) => {
  return (
    <main className="main">
      <h1 className="pageTitle">Tech News</h1>
      <hr className="line" />
      <Content data={data} />
    </main>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=gb&category=technology&pageSize=16",
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );

  const data = await res.json();
  // console.log(data);

  return {
    props: {
      data: data,
    },
    //Refreshes the fetch every hour to rebuild page with new stories
    revalidate: 60 * 60,
  };
};

export default Tech;
