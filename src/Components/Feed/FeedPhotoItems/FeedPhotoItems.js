import React from "react";
import styles from "./FeedPhotoItems.module.css";

const FeedPhotoItems = ({ photo }) => {
  return (
    <li className={styles.photo}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotoItems;
