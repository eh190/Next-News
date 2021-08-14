import React from "react";
import styles from "./Story.module.scss";

const Story = (props) => {
  const article = props.article;

  //Splitting author from title
  const splitTitle = article.title.split(" - ");
  const author = splitTitle.pop();
  const title = splitTitle.join();

  //if url exists, use it. If not, use default logo
  const imageSource =
    article.urlToImage === null ? "/static/Logo.png" : article.urlToImage;

  return (
    <a href={article.url} target="_blank" rel="noreferrer">
      <div className={styles.card}>
        <img src={imageSource} alt="" className={styles.card__img} />
        <div className={styles.card__body}>
          <h4 className={styles.card__title}>{title}</h4>
          <h6 className={styles.card__author}>{author}</h6>
        </div>
      </div>
    </a>
  );
};

export default Story;