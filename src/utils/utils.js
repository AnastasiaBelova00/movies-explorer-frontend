//фильтрация поиска фильма по названию
export function filterNameMovies(arr, query) {
  return arr.filter((movie) => {
    return (
      movie.nameEN.toLowerCase().includes(query.toLowerCase()) ||
      movie.nameRU.toLowerCase().includes(query.toLowerCase())
    );
  });
}

//фильтрация поиска фильма по длительности
export function filterShortMovies(arr) {
  return arr.filter((movie) => movie.duration < 40);
}
