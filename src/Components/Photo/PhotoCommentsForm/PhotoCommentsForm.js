import React, { useState } from "react";
import useFetch from "../../../Hooks/useFetch";
import { ReactComponent as Send } from "../../../Assets/enviar.svg";
import { COMMENT_POST } from "../../../Services/api";
import Error from "../../../Helper/Error/Error";
import styles from "./PhotoCommentsForm.module.css";

const PhotoCommentsForm = ({ id, setComments }) => {
  const { error, request } = useFetch();
  const [comment, setComment] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const token = window.localStorage.getItem("token");
    const { url, options } = COMMENT_POST(token, id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.send}>
        <Send />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
