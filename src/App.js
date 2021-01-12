import React from 'react';
import Navigation from './common/Navigation';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { toMovieDetails, toMoviesList } from './routes';
import MoviesList from './features/MoviesList';
import MovieDetails from './features/MovieDetails';


function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path={toMoviesList()}>
          <MoviesList />
        </Route>
        <Route path={toMovieDetails()}>
          <MovieDetails />
        </Route>
        <Route path="/">
          <Redirect to={toMoviesList()}/>
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default App;
