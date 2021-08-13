import React from "react";
import BigStory from "../BigStory/BigStory";
import Story from "../Story/Story";
import styles from "./Content.module.scss";

const Content = (props) => {
  const articles = props.data.articles;

  // const fistStory = articles.shift();

  const articlesJSX = articles.slice(1).map((article, index) => {
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
