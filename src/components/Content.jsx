import styles from "./Content.module.scss";
import Recipe from "./Recipe";
import { data } from "../data/recipes";
import { useState } from "react";

export default function Content() {
  const [filter, setFilter] = useState("");
  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }
  return (
    <div className="flex-fill container p-20">
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
      <div className={`card p-20 d-flex flex-column ${styles.contentCard}`}>
        <div
          className={`d-flex flex-row justify-content-center align-item-center my-30 ${styles.searchBar}`}
        >
          <i className="fa-solid fa-magnifying-glass mr-15"></i>
          <input
            type="text"
            placeholder="search ..."
            value={filter}
            className="flex-fill"
            onInput={handleInput}
          />
        </div>
        <div className={styles.grid}>
          {data
            .filter((recipe) => recipe.title.toLowerCase().startsWith(filter))
            .map((recipe) => (
              <Recipe
                key={recipe.id}
                title={recipe.title}
                picture={recipe.picture}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
