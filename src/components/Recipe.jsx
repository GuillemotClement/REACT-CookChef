import styles from "./Recipe.module.scss";

export default function Recipe({ title, picture }) {
  return (
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
        <i className="fa-solid fa-heart"></i>
      </div>
    </div>
  );
}
