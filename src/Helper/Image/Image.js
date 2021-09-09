import React, { useState } from "react";
import styles from "./Image.module.css";

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.skeleton}></div>
      <img onLoad={handleLoad} src={styles.img} alt={alt} {...props} />
    </div>
  );
};

export default Image;