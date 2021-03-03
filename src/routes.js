export const toMoviesPage = () => "/moviesPage";
export const toPersonsPage = () => "/personsPage";

export const toMovieDetails = ({ id } = { id: ":id" }) => `/movieDetails/${id}`;
export const toPersonDetails = ({ id } = { id: ":id" }) => `/personDetails/${id}`;