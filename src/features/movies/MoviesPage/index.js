import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, resetState, selectErrorStatus, selectLoadingStatus, selectMoviesList } from "../moviesSlice";
import { Loading } from "../../../common/Loding";
import { Error } from "../../../common/Error";
import Container from "../../../common/Container";
import Tile from "../../../common/Tile";
import Section from "../../../common/Section";
import { List } from "../../../common/List";

function MoviesPage () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());

    return (resetState());
  },[dispatch]);

  const loading = useSelector(selectLoadingStatus);
  const error = useSelector(selectErrorStatus);
  const moviesList = useSelector(selectMoviesList);

  return (
    <Container>
      {loading ?
        <Loading /> :
        error ?
          <Error /> :
        moviesList.length  &&
        <Section title="Most popular">
            <List movies>
              {moviesList.map(movie =>
                  <Tile
                    movies
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster={movie.poster_path}
                    subtitle={movie.release_date}
                    vote={movie.vote_count}
                    voteAverage={movie.vote_average}
                    genresId={movie.genre_ids}
                  />
              )}
            </List>
        </Section>
      }
    </Container>
  );
}

export default MoviesPage;
