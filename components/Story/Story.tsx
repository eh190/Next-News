import React from "react";
import { Article } from "../../types";
import styles from "./Story.module.scss";

const Story = (props) => {
  const article: Article = props.article;

  //function setting a string to show first X characters
  const setTextToXChars = (string: string, length: number) => {
    return string.length > length ? string.substring(0, 70) + "..." : string;
  };

  //Splitting author from title
  const splitTitle = article.title.split(" - ");
  const author = splitTitle.pop();
  const title = splitTitle.join();

  //if url exists, use it. If not, use default logo
  const imageSource =
    article.urlToImage === null || article.urlToImage === ""
      ? "/static/StoryLogo.png"
      : article.urlToImage;

  return (
    <a href={article.url} target="_blank" rel="noreferrer">
      <div className={styles.card}>
        <img src={imageSource} alt="story image" className={styles.card__img} />
        <div className={styles.card__body}>
          <h3 className={styles.card__title}>{setTextToXChars(title, 70)}</h3>
          <p className={styles.card__author}>{author}</p>
        </div>
      </div>
    </a>
  );
};

export default Story;
