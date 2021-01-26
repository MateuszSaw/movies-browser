const apiKey = "api_key=4cad831e5b0cc0ded624dfeaaa8dbfb9";
const baseURL = "https://api.themoviedb.org/3/";


export const dataFromApi = async () => {

  const response = await fetch(`${baseURL}movie/popular?${apiKey}`);

  if (response.ok){
    new Error(response.statusText);
  }
  const movies = await response.json();
   return movies;
};

export const getGenreFromApi = async () => {
  const response = await fetch(`${baseURL}genre/movie/list?${apiKey}`);

  if(response.ok){
    new Error(response.statusText)
  }
  return await response.json();
};


