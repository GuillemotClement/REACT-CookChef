import styles from "./RecipeForm.module.scss";

export default function RecipeForm() {
  return (
    <form className={`d-flex flex-column card p-20 ${styles.recipeForm}`}>
      <h2 className="mb-20">Ajouter une recette</h2>
      <div className="d-flex flex-column mb-20">
        <label>Nom de la recette</label>
        <input type="text" />
        {/* <p className="form-error">Error</p> */}
      </div>
      <div className="d-flex flex-column mb-20">
        <label>Image</label>
        <input type="text" />
        {/* <p className="form-error">Error</p> */}
      </div>
      <div className="">
        <button className="btn btn-primary">Sauvegarder</button>
      </div>
    </form>
  );
}
