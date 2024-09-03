import styles from "./RecipeForm.module.scss";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ApiContext } from "../../../../context/ApiContext";

export default function RecipeForm() {
  const BASE_URL_API = useContext(ApiContext);

  const defaultValues = {
    title: "",
    picture: "",
  };

  const recipeSchema = yup.object({
    title: yup
      .string()
      .required("Le titre doit être renseigné")
      .min(10, "Le titre doit être explicite")
      .max(30, "Le titre doit être plus court"),
    picture: yup
      .string()
      .url("L'image doit être un lien valide")
      .required("Il faut indiquer une image"),
  });

  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    reset,
    clearErrors,
    setError,
  } = useForm({
    defaultValues,
    resolver: yupResolver(recipeSchema),
  });

  async function submit(values) {
    try {
      clearErrors();
      const response = await fetch(BASE_URL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        reset(defaultValues);
      } else {
        setError("generic", { type: "generic", message: "Il y a eu une erreur" });
      }
    } catch (e) {
      setError("generic", { type: "generic", message: "Il y a eu une erreur" });
    }
  }

  return (
    <form
      className={`d-flex flex-column card p-20 ${styles.recipeForm}`}
      onSubmit={handleSubmit(submit)}
    >
      <h2 className="mb-20">Ajouter une recette</h2>
      <div className="d-flex flex-column mb-20">
        <label>Nom de la recette</label>
        <input
          type="text"
          {...register("title")}
        />
        {errors.title && <p className="form-error">{errors.title.message}</p>}
      </div>
      <div className="d-flex flex-column mb-20">
        <label>Image</label>
        <input
          type="text"
          {...register("picture")}
        />
        {errors.picture && <p className="form-error">{errors.picture.message}</p>}
      </div>
      {errors.generic && <p className="form-error">{errors.generic.message}</p>}
      <div className="">
        <button
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          Sauvegarder
        </button>
      </div>
    </form>
  );
}
