import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Container from '../../../common/Container';
import { Error } from '../../../common/Error';
import { Loading } from '../../../common/Loding';
import Tile from '../../../common/Tile';
import {ListLink, TileList} from "../../../common/List";
import Section from '../../../common/Section';
import { fetchPersonsDetails, selectPersonsDetails, resetState, selectPersonsDetailsErrorStatus, selectPersonsDetailsLoadingStatus, selectMoviesDetailsCast, selectMoviesDetailsCrew } from './personsDetailsSlice';
import { Button } from '../../../common/Button';
import { toMovieDetails } from '../../../routes';

function PersonDetails () {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectPersonsDetailsLoadingStatus);
  const error = useSelector(selectPersonsDetailsErrorStatus);
  const details = useSelector(selectPersonsDetails);
  const crew = useSelector(selectMoviesDetailsCrew);
  const cast = useSelector(selectMoviesDetailsCast);
  const moviesListLimit = 8;
  const [moviesCounter, setMoviesCounter] = useState(moviesListLimit);

  useEffect(() => {
    dispatch(fetchPersonsDetails(id));
    return (() => dispatch(resetState()));
  }, [id, dispatch]);

  return (
    <Container>
      {loading ?
        <Loading /> :
        error ?
          <Error /> :
          details.length === undefined && details.length !==0  &&
        <>
          <Tile
            personDetails
            title={details.name}
            poster={details.profile_path}
            birthPlace={details.place_of_birth}
            birthDate={details.birthday}
            description={details.biography}
          />
          {cast.length &&
            <Section title={`Cast (${cast.length})`}>
              <TileList>
                {cast.slice(0, moviesCounter).map(movie =>
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
              {cast.length > moviesListLimit &&
              <Button
                onClick={() => setMoviesCounter(cast.length > moviesCounter ? cast.length : moviesListLimit)}
              >
                {cast.length === moviesCounter ? "Hide" : "Show all"}
              </Button>
              }
            </Section>
          }
          {crew.length >0 &&
                  <Section title={`Crew (${crew.length})`}>
                    <TileList>
                      {crew.slice(0, moviesCounter).map(movie =>
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
                          // genresId={movie.genre_ids}
                        />
                        </ListLink>
                      )}
                    </TileList>
                    {crew.length > moviesListLimit &&
                      <Button
                        onClick={() => setMoviesCounter(crew.length > moviesCounter ? crew.length : moviesListLimit)}
                      >
                        {crew.length === moviesCounter ? "Hide" : "Show all"}
                      </Button>
                    }
                  </Section>
                }
        </>
      }
    </Container>
  );
};

export default PersonDetails;


