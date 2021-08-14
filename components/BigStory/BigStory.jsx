import React from "react";
import styles from "./BigStory.module.scss";

const BigStory = (props) => {
  const leadStory = props.leadStory;

  //Splitting author from title
  const splitTitle = leadStory.title.split(" - ");
  const author = splitTitle.pop();
  const title = splitTitle.join();

  //if url exists, use it. If not, use default logo
  const imageSource =
    leadStory.urlToImage === null ? "/static/Logo.png" : leadStory.urlToImage;

  return (
    <a href={leadStory.url} target="_blank" rel="noreferrer">
      <div className={styles.card}>
        <img src={imageSource} alt="" className={styles.card__img} />
        <div className={styles.card__body}>
          <h4 className={styles.card__title}>{title}</h4>
          <p className={styles.card__author}>{author}</p>
        </div>
      </div>
    </a>
  );
};

export default BigStory;
