import "./App.css";
import { useState } from "react";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="app">
      <div className="app__container">
        <Header loggedIn={loggedIn} />
        <Main />
      </div>
    </div>
  );
}

export default App;
