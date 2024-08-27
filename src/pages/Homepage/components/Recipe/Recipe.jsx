import { useContext } from "react";
import styles from "./Recipe.module.scss";
import { ApiContext } from "../../../../context/ApiContext";

export default function Recipe({ recipe: { _id, liked, title, picture }, toggleLikedRecipe }) {
  //on vient récupérer l'url de base via le context
  const BASE_URL_API = useContext(ApiContext);

  //on vient réaliser la requête pour la mise à jour de la propriété
  async function handleClick() {
    // configuration de la requete
    try {
      //on vient sélectionner un article avec son id pour modifier la valeur
      const response = await fetch(`${BASE_URL_API}/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          liked: !liked,
        }),
      });
      if (response.ok) {
        const updateRecipe = await response.json();
        toggleLikedRecipe(updateRecipe);
      }
    } catch (e) {
      console.log("Erreur :", e);
    }
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
