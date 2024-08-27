import Loading from "../../components/Loading/Loading";
import { ApiContext } from "../../context/ApiContext";
import styles from "./Homepage.module.scss";
import Recipe from "./components/Recipe/Recipe";
// import { data } from "../../data/recipes";
import { useContext, useEffect, useState } from "react";

export default function Homepage() {
  // on vient stocker la listes des recettes
  const [recipes, setRecipes] = useState([]);
  // on vient créer une variable d'état pour l'affichage du gif de chargement
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");

  // on vient utiliser le context pour récupérer l'url
  const BASE_URL_API = useContext(ApiContext);

  //on vient utiliser un useEffect qui viendras s'exécuter une seule fois. On viens la passer un tableau de dépendances vide.
  useEffect(() => {
    //on viens verif si il faut faire un call
    let cancel = false;
    async function fetchRecipes() {
      try {
        setIsLoading(true);
        // on vient faire la requête pour récupérer les données
        const response = await fetch(`${BASE_URL_API}?limit=18`);
        if (response.ok && !cancel) {
          //on vient récupèrer les recettes dans recipes
          const recipes = await response.json();
          //si la réponse est un tableau
          //si true on retourne le recipes
          //sinon on ajoute dans un nouveau tableau
          setRecipes(Array.isArray(recipes) ? recipes : [recipes]);
        }
      } catch (e) {
        console.log("Erreur :", e);
      } finally {
        if (!cancel) {
          setIsLoading(false);
        }
      }
    }
    //on vient appeler la fonction d'appel
    fetchRecipes();
    //on viens utiliser une fonction de clean up
    return () => (cancel = true);
  }, [BASE_URL_API]);

  function updateRecipe(updatedRecipe) {
    setRecipes(
      recipes.map((recipe) => (recipe._id === updatedRecipe._id ? updatedRecipe : recipe))
    );
  }

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
                  recipe={recipe}
                  toggleLikedRecipe={updateRecipe}
                />
              ))}
          </div>
        )}
        <div className="d-flex flex-row justify-content-center align-items-center p-20">
          <button className="btn btn-primary">Charger plus de recettes</button>
        </div>
      </div>
    </div>
  );
}
