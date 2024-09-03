import { useEffect, useState } from "react";

export function useFetchData(url, page) {
  // on vient stocker la listes des recettes
  const [data, setData] = useState([]);
  // on vient créer une variable d'état pour l'affichage du gif de chargement
  const [isLoading, setIsLoading] = useState(true);
  // gestion d'erreur
  const [error, setError] = useState([]);

  //on vient utiliser un useEffect qui viendras s'exécuter une seule fois. On viens la passer un tableau de dépendances vide.
  useEffect(() => {
    //on viens verif si il faut faire un call
    let cancel = false;
    async function fetchData() {
      try {
        setIsLoading(true);
        // si on as une pagination on maj la queries
        const queryParam = new URLSearchParams();
        if (page) {
          queryParam.append("limit", 18);
          queryParam.append("skip", (page - 1) * 18);
          queryParam.append("sort", "createdAt:-1");
        }

        // on vient faire la requête pour récupérer les données
        const response = await fetch(url + `?${queryParam}`);
        if (response.ok && !cancel) {
          //on vient récupèrer les recettes dans recipes
          const newData = await response.json();
          //si la réponse est un tableau
          //si true on retourne le recipes
          //sinon on ajoute dans un nouveau tableau
          setData((x) => (Array.isArray(newData) ? [...x, ...newData] : [...x, newData]));
        }
      } catch (e) {
        setError("Erreur");
      } finally {
        if (!cancel) {
          setIsLoading(false);
        }
      }
    }
    //on vient appeler la fonction d'appel
    fetchData();
    //on viens utiliser une fonction de clean up
    return () => (cancel = true);
  }, [url, page]);

  return [[data, setData], isLoading, error];
}
