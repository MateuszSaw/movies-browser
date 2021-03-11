export const toMoviesPage = () => "/movies";
export const toPersonsPage = () => "/persons";

export const toMovieDetails = ({ id } = { id: ":id" }) => `/movieDetails/${id}`;
export const toPersonDetails = ({ id } = { id: ":id" }) => `/personDetails/${id}`;
