import Loading from "../../components/Loading/Loading";
import { ApiContext } from "../../context/ApiContext";
import styles from "./Homepage.module.scss";
import Recipe from "./components/Recipe/Recipe";
// import { data } from "../../data/recipes";
import { useContext, useEffect, useState } from "react";
import Search from "./components/Search/Search";
import { useFetchData } from "../../hooks";

export default function Homepage() {
  const [filter, setFilter] = useState("");
  // on vient utiliser le context pour récupérer l'url
  const BASE_URL_API = useContext(ApiContext);

  //cette valeur permet de savoir combkien de résultat il faut skip
  const [page, setPage] = useState(1);

  const [[recipes, setRecipes], isLoading] = useFetchData(BASE_URL_API, page);

  function updateRecipe(updatedRecipe) {
    setRecipes(
      recipes.map((recipe) => (recipe._id === updatedRecipe._id ? updatedRecipe : recipe))
    );
  }

  function deleteRecipe(_id) {
    setRecipes(recipes.filter((recipe) => recipe._id !== _id));
  }

  return (
    <div className="flex-fill container d-flex flex-column p-20">
      <h1 className="my-30">
        Découvrez nos nouvelles recettes <small className={styles.small}>{recipes.length}</small>
      </h1>
      <div className={`card flex-fill p-20 d-flex flex-column mb-20 ${styles.contentCard}`}>
        <Search setFilter={setFilter} />
        {isLoading && !recipes.length ? (
          <Loading />
        ) : (
          <div className={styles.grid}>
            {recipes
              .filter((recipe) => recipe.title.toLowerCase().startsWith(filter))
              .map((recipe) => (
                <Recipe
                  key={recipe._id}
                  recipe={recipe}
                  toggleLikedRecipe={updateRecipe}
                  deleteRecipe={deleteRecipe}
                />
              ))}
          </div>
        )}
        <div className="d-flex flex-row justify-content-center align-items-center p-20">
          <button
            className="btn btn-primary"
            onClick={() => setPage(page + 1)}
          >
            Charger plus de recettes
          </button>
        </div>
      </div>
    </div>
  );
}
