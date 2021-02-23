import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button } from '../../../common/Button';
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
  const personsListLimit = 12;
  const [personsCounter, setPersonsCounter] = useState(personsListLimit);

  useEffect(() => {
    dispatch(fetchDetails(id));
    return (() => dispatch(resetState()));
  }, [id, dispatch]);

  return (
    <>
    {loading ?
      <Loading /> :
      error ?
        <Error /> :
        details  &&
      <Backdrop
        backdrop={details.backdrop_path}
        title={details.title}
        vote={details.vote_count}
        voteAverage={details.vote_average}
      />
    }
      <Container>
        {loading ?
          <Loading /> :
          error ?
            <Error /> :
            details.length !==0  &&
            <>
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
                {cast.length &&
                  <Section title="Cast">
                    <List persons>
                      {cast.slice(0, personsCounter).map(person =>
                        <PersonTile
                          key={person.id + person.character}
                          name={person.name}
                          role={person.character}
                          poster={person.profile_path}
                        />
                      )}
                    </List>
                    {cast.length > personsListLimit &&
                      <Button
                        onClick={() => setPersonsCounter(cast.length > personsCounter ? cast.length : personsListLimit)}
                      >
                        {cast.length === personsCounter ? "Hide" : "Show all"}
                      </Button>
                    }
                  </Section>
                }
                {crew.length &&
                  <Section title="Crew">
                    <List persons>
                      {crew.slice(0, personsCounter).map(person =>
                        <PersonTile
                          key={person.id + person.job}
                          name={person.name}
                          role={person.job}
                          poster={person.profile_path}
                        />
                      )}
                    </List>
                    {crew.length > personsListLimit &&
                      <Button
                        onClick={() => setPersonsCounter(crew.length > personsCounter ? crew.length : personsListLimit)}
                      >
                        {crew.length === personsCounter ? "Hide" : "Show all"}
                      </Button>
                    }
                  </Section>
                }
            </>
        }
      </Container>
    </>
  );
}
export default MovieDetails;