import { useLocation, useHistory } from "react-router-dom";
import { toMoviesPage, toPersonsPage } from "./routes";

export const useQueryParameter = key => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(key);
};

export const useReplaceQueryParameter = () => {
  const history = useHistory();
  const location = useLocation();

  return ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);

    if (value === undefined){
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
    const newSearch = searchParams.toString();
    history.push({
      pathname: location.pathname.startsWith(toMoviesPage()) ? toMoviesPage() : toPersonsPage(),
      search: `?${newSearch}`,
    });
  }
}

