import { data } from "./recipes";

export async function seedRecipes() {
  await fetch("https://restapi.fr/api/recipess", {
    //on indique la méthode de la requête
    method: "POST",
    //on indique le contenu de la requêtes
    headers: {
      // ici on envoie du JSON
      "Content-Type": "application/json",
    },
    // on passe dans le body un tableau json
    //on vient lui passer la tableau créer dans un autre fichier
    body: JSON.stringify(data),
  });
}
