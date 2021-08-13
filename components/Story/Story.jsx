import React from "react";
import styles from "./Story.module.scss";

const Story = (props) => {
  const article = props.article;

  return (
    <div className={styles.card}>
      <h4>{article.title}</h4>
    </div>
  );
};

export default Story;
