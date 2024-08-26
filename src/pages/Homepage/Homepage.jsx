import Loading from "../../components/Loading/Loading";
import styles from "./Homepage.module.scss";
import Recipe from "./components/Recipe/Recipe";
// import { data } from "../../data/recipes";
import { useState } from "react";

export default function Homepage() {
  // on vient stocker la listes des recettes
  const [recipes, setRecipes] = useState([]);

  // on vient créer une variable d'état pour l'affichage du gif de chargement
  const [isLoading, setIsLoading] = useState(true);

  const [filter, setFilter] = useState("");
  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }
  return (
    <div className="flex-fill container d-flex flex-column p-20">
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
      <div className={`card flex-fill p-20 d-flex flex-column mb-20 ${styles.contentCard}`}>
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
        {isLoading ? (
          <Loading />
        ) : (
          <div className={styles.grid}>
            {recipes
              .filter((recipe) => recipe.title.toLowerCase().startsWith(filter))
              .map((recipe) => (
                <Recipe
                  key={recipe._id}
                  title={recipe.title}
                  picture={recipe.picture}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
