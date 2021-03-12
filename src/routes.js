export const toMoviesPage = () => "/movies";
export const toPersonsPage = () => "/persons";

export const toMovieDetails = ({ id } = { id: ":id" }) => `/movies/${id}`;
export const toPersonDetails = ({ id } = { id: ":id" }) => `/persons/${id}`;
