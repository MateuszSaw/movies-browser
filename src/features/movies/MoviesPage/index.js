import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectErrorStatus, selectLoadingStatus, selectMoviesList, selectTotalPages } from "../moviesSlice";
import { Loading } from "../../../common/Loding";
import { Error } from "../../../common/Error";
import { NoResultPage } from "../../../common/NoResultPage";
import Container from "../../../common/Container";
import Tile from "../../../common/Tile";
import {TileList} from "../../../common/List";
import { Header } from "../../../common/Header";
import searchQueryParamName from "../../../searchQueryParamName";
import { Pagination } from "../../../common/Pagination";
import { useQueryParameter } from "../../../queryParameters";

function MoviesPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);
  const error = useSelector(selectErrorStatus);
  const query = useQueryParameter(searchQueryParamName);
  const moviesList = useSelector(selectMoviesList)
  const totalPages = useSelector(selectTotalPages);
  const page = useQueryParameter('page');

  useEffect(() => {
    dispatch(fetchMovies({ page: page || 1, query }));
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
                <TileList>
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
                </TileList>
                <Pagination totalPages={totalPages}/>
              </>
      }
    </Container>
  );
};

export default MoviesPage;
