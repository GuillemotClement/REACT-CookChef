import styles from "./Recipe.module.scss";

export default function Recipe({ recipe: { _id, liked, title, picture } }) {
  function handleClick() {}

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
