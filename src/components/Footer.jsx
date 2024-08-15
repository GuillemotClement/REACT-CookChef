import style from "./Footer.module.scss";
export default function Footer() {
  return (
    <footer
      className={`${style.footer} d-flex flex-row align-items-center justify-content-center p-20`}
    >
      <p>Copyright © 2022 Cookchef Dyma, Inc.</p>
    </footer>
  );
}
