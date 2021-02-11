import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from '../../../common/Container';
import { Error } from '../../../common/Error';
import List from '../../../common/List';
import { Loading } from '../../../common/Loding';
import Section from '../../../common/Section';
import Tile from '../../../common/Tile';
import PersonTile from '../../../common/Tile/PersonTile';
import { Backdrop } from './Backdrop';
import { fetchDetails, resetState, selectDetailsErrorStatus, selectDetails, selectDetailsLoadingStatus, selectPersonDetailsCast, selectPersonDetailsCrew } from './detailsSlice';

function MovieDetails () {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectDetailsLoadingStatus);
  const error = useSelector(selectDetailsErrorStatus);
  const details = useSelector(selectDetails);
  const crew = useSelector(selectPersonDetailsCrew);
  const cast = useSelector(selectPersonDetailsCast);

  useEffect(() => {
    dispatch(fetchDetails(id));

    return (resetState());
  }, [id, dispatch]);

  return (
    <>
      <Backdrop
        backdrop={details.backdrop_path}
        title={details.title}
        vote={details.vote_count}
        voteAverage={details.vote_average}
      />
      <Container>
        {loading ?
          <Loading /> :
          error ?
            <Error /> :
            details &&
              <Tile
                metaDataOnMobile
                key={details.id}
                id={details.id}
                title={details.title}
                poster={details.poster_path}
                subtitle={details.release_date}
                vote={details.vote_count}
                voteAverage={details.vote_average}
                genresId={details.genres}
                production={details.production_countries}
                releaseDate={details.release_date}
                description={details.overview}
              />
        }
          <Section title="Cast">
            <List persons>
            {cast?.map(person =>
              <PersonTile
                key={person.id}
                name={person.name}
                role={person.character}
                poster={person.profile_path}
              />
            )}
            </List>
          </Section>
          <Section title="Crew">
            <List persons>
            {crew?.map(person =>
              <PersonTile
                key={person.id}
                name={person.name}
                role={person.job}
                poster={person.profile_path}
              />
            )}
            </List>
          </Section>
      </Container>
    </>
  );
}
export default MovieDetails;