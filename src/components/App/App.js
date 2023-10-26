import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { ProtectedRoute } from "../ProtectedRoute";
import Tooltip from "../Tooltip/Tooltip";
import Preloader from "../Preloader/Preloader";
// import { filterNameMovies, filterShortMovies } from "../../utils/utils";

import * as api from "../../utils/MainApi";
import * as apiMovie from "../../utils/MoviesApi";

function App() {
  //стейт логина
  const [isLoggedIn, setLoggedIn] = useState(true);

  //стейт для проверки регистрации
  const [isRegistered, setRegistered] = useState(false);

  //попап при статусе регистрации
  const [isTooltipOpen, setTooltipOpen] = useState(false);

  //данные пользователя
  const [currentUser, setCurrentUser] = useState({});

  //ошибка сервера
  const [serverError, setServerError] = useState("");

  //загрузка для прелоадера
  const [isLoading, setLoading] = useState(false);

  //все фильмы с сервера
  const [allMovies, setAllMovies] = useState([]);

  //сохраненные фильмы
  const [allSavedMovies, setAllSavedMovies] = useState([]);

  //стейт для обновления профиля
  const [isUpdate, setUpdate] = useState(false);

  //навигация
  const navigate = useNavigate();
  const location = useLocation();

  //проверка токена
  function checkToken() {
    api
      .getContent(localStorage.getItem("jwt"))
      .then((data) => {
        setLoggedIn(true);
        setCurrentUser(data);
        getSavedMovies();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        setLoggedIn(false);
      });
  }
  useEffect(() => {
    checkToken();
  }, []);

  //данные пользователя при логине
  useEffect(() => {
    if (isLoggedIn) {
      setLoading(true);
      api
        .getUserInfo()
        .then((userInfo) => {
          setCurrentUser({ name: userInfo.name, email: userInfo.email });
          setLoggedIn(true);
        })
        .catch((err) => {
          console.error(`Ошибка: ${err}`);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [isLoggedIn]);

  //получение списка фильмов
  useEffect(() => {
    setLoading(true);
    apiMovie
      .getAllMovies()
      .then((movies) => {
        setAllMovies(movies);
        localStorage.setItem("movies", JSON.stringify(movies));
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  //выход
  function logOut() {
    setLoggedIn(false);
    localStorage.clear();
  }

  //очистка ошибки сервера
  useEffect(() => {
    setServerError("");
  }, [location]);

  //регистрация пользователя
  function handleRegistration({ name, email, password }) {
    setLoading(true);
    api
      .register(name, email, password)
      .then(() => {
        handleLogin({ email, password });
        setRegistered(true);
        setTooltipOpen(true);
      })
      .catch((err) => {
        setServerError(err);
        setRegistered(false);
        setTooltipOpen(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  //функция логина
  function handleLogin({ email, password }) {
    setLoading(true);
    api
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setLoggedIn(true);
          navigate("/movies");
        }
      })
      .catch((err) => {
        setLoggedIn(false);
        setServerError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  //изменение информации профиля
  function handleUpdateUser(data) {
    setLoading(true);
    api
      .editUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
        setTooltipOpen(true);
        setUpdate(true);
      })
      .catch((err) => {
        setServerError(err);
        setTooltipOpen(true);
        setUpdate(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  // //функция всех фильмов
  // function getAllMovies() {
  //   apiMovie
  //     .getAllMovies()
  //     .then((movies) => {
  //       setAllMovies(movies);
  //       localStorage.setItem("movies", JSON.stringify(movies));
  //     })
  //     .catch((err) => {
  //       console.error(`Ошибка: ${err}`);
  //     });
  // }

  //все сохраненные фильмы
  function getSavedMovies() {
    api
      .getSavedMovies()
      .then((allSavedMovies) => {
        setAllSavedMovies(allSavedMovies);
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  }

  //сохранение фильма
  function saveMovie(movie) {
    api
      .saveMovie(movie)
      .then((savedMovie) => {
        setAllSavedMovies([...allSavedMovies, savedMovie]);
        localStorage.setItem(
          "savedMovies",
          JSON.stringify([...allSavedMovies, savedMovie])
        );
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  }

  //удаление фильма
  function deleteMovie(movie) {
    api
      .deleteMovie(movie._id)
      .then(() => {
        setAllSavedMovies((state) =>
          state.filter((item) => item._id !== movie._id)
        );
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  }

  // //фильтр поиска по всем фильмам
  // function filterMovies(query) {
  //   const filteredMovies = filterNameMovies(allMovies, query);
  //   localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies));
  //   localStorage.setItem("query", query);
  //   setFilteredMovies(filteredMovies);
  // }

  // //фильтр поиска по сохраненным фильмам
  // function filterSavedMovies(query) {
  //   const filteredSavedMovies = filterNameMovies(allSavedMovies, query);
  //   localStorage.setItem(
  //     "filteredSavedMovies",
  //     JSON.stringify(filteredSavedMovies)
  //   );
  //   localStorage.setItem("query", query);
  //   setAllSavedMovies(filteredSavedMovies);
  // }

  return isLoading ? (
    <Preloader />
  ) : (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <div className="app__container">
          <Header isLoggedIn={isLoggedIn} />
          <Routes>
            <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />

            <Route
              path="/signup"
              element={
                <ProtectedRoute
                  element={Register}
                  handleRegistration={handleRegistration}
                  serverError={serverError}
                  isLoggedIn={!isLoggedIn}
                />
              }
            />

            <Route
              path="/signin"
              element={
                <ProtectedRoute
                  element={Login}
                  handleLogin={handleLogin}
                  serverError={serverError}
                  isLoggedIn={!isLoggedIn}
                />
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  isLoggedIn={isLoggedIn}
                  element={Profile}
                  handleUpdateUser={handleUpdateUser}
                  logOut={logOut}
                  serverError={serverError}
                />
              }
            />

            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  isLoggedIn={isLoggedIn}
                  element={Movies}
                  allMovies={allMovies}
                  saveMovie={saveMovie}
                  allSavedMovies={allSavedMovies}
                  deleteMovie={deleteMovie}
                  isLoading={isLoading}
                />
              }
            />

            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  isLoggedIn={isLoggedIn}
                  element={SavedMovies}
                  allSavedMovies={allSavedMovies}
                  deleteMovie={deleteMovie}
                />
              }
            />

            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Tooltip
            isTooltipOpen={isTooltipOpen}
            setTooltipOpen={setTooltipOpen}
            isRegistered={isRegistered}
            isUpdate={isUpdate}
          />

          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
