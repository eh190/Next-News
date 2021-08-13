import Content from "../components/Content/Content";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=gb&category=business&pageSize=10",
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );

  const data = await res.json();
  console.log(data);

  return {
    props: {
      data: data,
    },
    //Refreshes the fetch every hour to rebuild page with new stories
    revalidate: 60 * 60,
  };
};

const Business = ({ data }) => {
  return (
    <main className="main">
      <h1 className="pageTitle">Business NEWS</h1>
      <hr className="line" />
      <Content data={data} />
    </main>
  );
};

export default Business;
