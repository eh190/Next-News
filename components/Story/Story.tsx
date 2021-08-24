import React from "react";
import { Article } from "../../types";
import styles from "./Story.module.scss";
import Image from "next/image";
import { setTextToXChars } from "../../functions/functions";

const Story = ({ article }: { article: Article }) => {
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
      <article className={styles.card}>
        <div className={styles.card__imgContainer}>
          <Image
            loader={() => imageSource}
            src={imageSource}
            unoptimized
            layout="fill"
            alt="story image"
            className={styles.card__imgContainer_img}
          />
        </div>
        <div className={styles.card__body}>
          <h3 className={styles.card__title}>{setTextToXChars(title, 70)}</h3>
          <p className={styles.card__author}>{author}</p>
        </div>
      </article>
    </a>
  );
};

export default Story;
