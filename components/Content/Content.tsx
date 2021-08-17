import React from "react";
import { Article, Data } from "../../types";
import BigStory from "../BigStory/BigStory";
import Story from "../Story/Story";
import styles from "./Content.module.scss";

const Content = (props: Data) => {
  const articles = props.articles;

  //Producing normal story sizes removing first story for big story
  const articlesJSX = articles.slice(1).map((article: Article, index) => {
    return (
      <Story
        key={article.author + article.source.name + index}
        article={article}
      />
    );
  });

  return (
    <>
      <div className={styles.container}>
        <BigStory leadStory={articles[0]} />
        <div className={styles.grid}>{articlesJSX}</div>
      </div>
    </>
  );
};

export default Content;
