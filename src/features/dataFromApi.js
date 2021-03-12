import axios from "axios";

const apiKey = "?api_key=4cad831e5b0cc0ded624dfeaaa8dbfb9";
const baseURL = "https://api.themoviedb.org/3/";
const language = "&language=en-US";

export const getPopularMovies = async ( page ) => {
  let response;
  await axios.get(`${baseURL}movie/popular${apiKey}${language}&page=${page}`)
    .then( data => response = data)
    .catch((error) => {
      console.error(error.message)
    })
  const data = response.data;
  return data;
};

export const getSearchMovies = async (page, query) => {
  let response;
  await axios.get(`${baseURL}search/movie${apiKey}${language}&query=${query}&page=${page}`)
    .then( data => response = data)
    .catch((error) => {
      console.error(error.message)
    })
  const data = response.data;
  return data;
};

export const getSearchPeople = async (page, query) => {
  let response;
  await axios.get(`${baseURL}search/person${apiKey}${language}&query=${query}&page=${page}`)
    .then( data => response = data)
    .catch((error) => {
      console.error(error.message)
    })
  const data = response.data;
  return data;
};

export const getPopularPeople = async ({ page }) => {
  let response;
  await axios.get(`${baseURL}person/popular${apiKey}${language}&page=${page}`)
    .then( data => response = data)
    .catch((error) => {
      console.error(error.message)
    })
  const data = response.data;
  return data;
};

export const getGenreFromApi = async () => {
  let response;
  await axios.get(`${baseURL}genre/movie/list${apiKey}${language}`)
    .then( data => response = data)
    .catch((error) => {
      console.error(error.message)
    })
  const data = response.data;
  return data;
};

export const getMovieDetailsFromApi = async (id) => {
  let response;
  await axios.get(`${baseURL}movie/${id}${apiKey}${language}`)
    .then( data => response = data)
    .catch((error) => {
      console.error(error.message)
    })
    const data = response.data;
    return data;
};

export const getPersonsDetailsFromApi = async (id) => {
  let response;
  await axios.get(`${baseURL}person/${id}${apiKey}${language}`)
    .then( data => response = data)
    .catch((error) => {
      console.error(error.message)
    })
    const data = response.data;
    return data;
};

export const getMovieCreditsFromApi = async (id) => {
  let response;
  await axios.get(`${baseURL}movie/${id}/credits${apiKey}${language}`)
    .then( data => response = data)
    .catch((error) => {
      console.error(error.message)
    })
    const data = response.data;
    return data;
};

export const getPersonsCreditsFromApi = async (id) => {
  let response;
  await axios.get(`${baseURL}person/${id}/movie_credits${apiKey}${language}`)
    .then( data => response = data)
    .catch((error) => {
      console.error(error.message)
    })
    const data = response.data;
    return data;
};