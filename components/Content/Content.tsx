import { useRouter } from "next/router";
import React from "react";
import { Article, Data } from "../../types";
import BigStory from "../BigStory/BigStory";
import Story from "../Story/Story";
import styles from "./Content.module.scss";

const Content = (props: Data) => {
  const articles = props.articles;
  const router = useRouter();

  //Producing normal story sizes removing first story for big story
  const articlesJSX = articles.slice(1).map((article: Article, index) => {
    return (
      <Story
        key={article.author + article.source.name + index}
        article={article}
      />
    );
  });

  //Retrieve section title from url
  const getSectionTitle = () => {
    const category = router.pathname.substring(1);
    return router.pathname != "/" ? `${category} News` : "UK News";
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.main__pageTitle}>{getSectionTitle()}</h1>
      <hr className={styles.main__line} />
      <div className={styles.main__container}>
        <BigStory leadStory={articles[0]} />
        <div className={styles.grid}>{articlesJSX}</div>
      </div>
    </main>
  );
};

export default Content;
