import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app">
      <div className="app__container">
        <Header loggedIn={loggedIn} />
        <Main />
        <Footer />
        {/* <Route path="/*" element={<NotFound />} /> */}
      </div>
    </div>
  );
}

export default App;
