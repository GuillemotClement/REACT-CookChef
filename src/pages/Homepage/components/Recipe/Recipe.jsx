import { useState } from "react";
import styles from "./Recipe.module.scss";

export default function Recipe({ title, picture }) {
  const [liked, setLiked] = useState(false);

  function handleClick() {
    setLiked(!liked);
  }

  return (
    <div onClick={handleClick}>
      <div className={`${styles.recipe}`}>
        <div className={`${styles.imageContainer}`}>
          <img
            src={picture}
            alt="recipe"
          />
        </div>
        <div
          className={`${styles.recipeTitle} d-flex flex-col justify-content-center align-items-center`}
        >
          <h3>{title}</h3>
          <i className={`fa-solid fa-heart ${liked ? "text-primary" : ""}`}></i>
        </div>
      </div>
    </div>
  );
}
