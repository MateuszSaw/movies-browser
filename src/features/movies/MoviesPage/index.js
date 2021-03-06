import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, resetState, selectErrorStatus, selectLoadingStatus, selectMoviesList, selectTotalPages } from "../moviesSlice";
import { Loading } from "../../../common/Loding";
import { Error } from "../../../common/Error";
import { NoResultPage } from "../../../common/NoResultPage";
import Container from "../../../common/Container";
import Tile from "../../../common/Tile";
import {ListLink, TileList} from "../../../common/List";
import { Header } from "../../../common/Header";
import { search as searchQueryParamName } from "../../../searchQueryParamName";
import { Pagination } from "../../../common/Pagination";
import { useQueryParameter } from "../../../queryParameters";
import { toMovieDetails } from "../../../routes";

function MoviesPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);
  const error = useSelector(selectErrorStatus);
  const query = useQueryParameter(searchQueryParamName);
  const moviesList = useSelector(selectMoviesList);
  const totalPages = useSelector(selectTotalPages);
  const page = useQueryParameter('page');

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
          moviesList.length === 0 ?
            <NoResultPage query={query} /> : moviesList.length &&
              <>
                <Header>{!query ? "Most Popular" : `Search results for "${query}" (${moviesList.length})`}</Header>
                <TileList movies>
                  {moviesList.map(movie =>
                    <ListLink
                      key={movie.id}
                      to={toMovieDetails(movie)}
                    >
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
                    </ListLink>
                )}
                </TileList>
                <Pagination totalPages={totalPages}/>
              </>
      }
    </Container>
  );
};

export default MoviesPage;
