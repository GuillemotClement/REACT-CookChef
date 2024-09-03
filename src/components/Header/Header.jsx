import style from "./Header.module.scss";
import cookchef from "../../assets/images/cookchef.png";
import { useState } from "react";
import MenuMobile from "./components/MenuMobile/MenuMobile";
export default function Header({ setPage }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`${style.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <img
          src={cookchef}
          alt="logo"
        />
      </div>
      <ul className={`${style.headerList}`}>
        <button
          className="btn btn-primary mr-5"
          onClick={() => setPage("admin")}
        >
          Ajouter un nouvelle recettee
        </button>
        <button className="mr-5 btn btn-reverse-primary">
          <i className="fa-solid fa-heart mr-5"></i>
          <span>Wishlist</span>
        </button>
        <button className="btn btn-primary">Connexion</button>
      </ul>
      <i
        className={`fa-solid fa-bars ${style.headerXs}`}
        onClick={() => setShowMenu(true)}
      ></i>
      {showMenu && (
        <>
          <div
            className="calc"
            onClick={() => setShowMenu(false)}
          ></div>
          <MenuMobile />
        </>
      )}
    </header>
  );
}
