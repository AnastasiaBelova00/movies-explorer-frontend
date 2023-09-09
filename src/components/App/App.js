import "./App.css";
import { useState } from "react";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="app">
      <div className="app__container">
        <Header loggedIn={loggedIn} />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
