import React from "react";
import styles from "./BigStory.module.scss";

const BigStory = (props) => {
  const leadStory = props.leadStory;
  return (
    <div className={styles.card}>
      <h4>{leadStory.title}</h4>
    </div>
  );
};

export default BigStory;
