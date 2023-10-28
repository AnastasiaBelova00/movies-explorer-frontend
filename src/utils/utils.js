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

//конвертация длительности фильма
export function durationConverter(duration) {
  const minutes = duration % 60;
  const hours = Math.floor(duration / 60);

  return `${hours}ч${minutes}м`;
}
