import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.scss";
import { seedRecipes } from "./data/seed";
import { useState } from "react";

// seedRecipes();

function App() {
  const [page, setPage] = useState("homepage");
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header setPage={setPage} />
      {page === "homepage" && <Homepage />}
      {/* {page === "admin" && <Admin />} */}
      <Footer />
    </div>
  );
}

export default App;
