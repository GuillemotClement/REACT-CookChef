import style from "./MenuMobile.module.scss";

export default function MenuMobile({ setPage }) {
  return (
    <ul className={`${style.menuMobile} card p-20`}>
      <li onClick={() => setPage("admin")}>Nouvelle recette</li>
      <li>Wishlist</li>
      <li>Connexion</li>
    </ul>
  );
}
