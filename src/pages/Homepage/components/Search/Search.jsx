import styles from "./Search.module.scss";

export default function Search({ setFilter }) {
  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  return (
    <div
      className={`d-flex flex-row justify-content-center align-item-center my-30 ${styles.searchBar}`}
    >
      <i className="fa-solid fa-magnifying-glass mr-15"></i>
      <input
        type="text"
        placeholder="search ..."
        className="flex-fill"
        onInput={handleInput}
      />
    </div>
  );
}
