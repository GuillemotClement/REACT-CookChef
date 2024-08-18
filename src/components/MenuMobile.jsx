import style from "./MenuMobile.module.scss";

export default function MenuMobile() {
  return (
    <ul className={`${style.menuMobile} card p-20`}>
      <li>Wishlist</li>
      <li>Connexion</li>
    </ul>
  );
}
