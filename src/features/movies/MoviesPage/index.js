import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, resetState, selectErrorStatus, selectLoadingStatus, selectMoviesByQuery, selectPage, selectPagination, selectPaginationState, selectTotalPages } from "../moviesSlice";
import { Loading } from "../../../common/Loding";
import { Error } from "../../../common/Error";
import Container from "../../../common/Container";
import Tile from "../../../common/Tile";
import List from "../../../common/List";
import { Header } from "../../../common/Header";
import searchQueryParamName from "../../../searchQueryParamName";
import { Pagination } from "../../../common/Pagination";
import { useQueryParameter } from "../../../queryParameters";

function MoviesPage () {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);
  const error = useSelector(selectErrorStatus);
  const query = useQueryParameter(searchQueryParamName);
  const moviesList = useSelector(state => selectMoviesByQuery(state, query));
  const totalPages = useSelector(selectTotalPages);
  const page = useQueryParameter("page");

  useEffect(() => {
    dispatch(fetchMovies({ page: page || 1, query }));
    return (() => dispatch(resetState()));
  }, [dispatch, page, query]);

  return (
    <Container>
      {loading ?
        <Loading /> :
        error ?
          <Error /> :
        moviesList.length  &&
        <>
        <Header>{!query ? "Most Popular" : `Search results for "${query}" (${moviesList.length})`}</Header>
            <List>
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
        </>
      }
      <Pagination actualPage={page} totalPages={totalPages}/>
    </Container>
  );
}

export default MoviesPage;