import React, { useEffect } from 'react';
import Navigation from './common/Navigation';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { toMovieDetails, toMoviesPage, toPersonDetails, toPersonsPage} from './routes';
import MoviesPage from './features/movies/MoviesPage';
import MovieDetails from './features/movies/MovieDetails';
import PersonsPage from './features/persons/PersonsPage';
import PersonDetails from './features/persons/PersonDetails';
import { fetchGenres } from './features/genres/genresSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <HashRouter>
      <Navigation />
      <Switch>
      <Route path={toMovieDetails()}>
          <MovieDetails />
        </Route>
      <Route path={toPersonDetails()}>
          <PersonDetails />
        </Route>
        <Route path={toMoviesPage()}>
          <MoviesPage />
        </Route>
        <Route path={toPersonsPage()}>
          <PersonsPage />
        </Route>
        <Route path="/">
          <Redirect to={toMoviesPage()}/>
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default App;
