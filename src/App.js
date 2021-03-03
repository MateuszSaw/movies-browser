import React from 'react';
import Navigation from './common/Navigation';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { toMovieDetails, toMoviesPage, toPersonDetails, toPersonsPage} from './routes';
import MoviesPage from './features/movies/MoviesPage';
import MovieDetails from './features/movies/MovieDetails';
import PersonsPage from './features/persons/PersonsPage';
import PersonDetails from './features/persons/PersonDetails';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
      <Route path={toMovieDetails()}>
          <MovieDetails />
        </Route>
      <Route path={toPersonDetails()}>
          <personDetails />
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
