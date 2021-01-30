import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from '../../../common/Container';
import { Error } from '../../../common/Error';
import { List } from '../../../common/List';
import { Loading } from '../../../common/Loding';
import Tile from '../../../common/Tile';
import { fetchDetails, resetState, selectDetailsErrorStatus, selectDetails, selectDetailsLoadingStatus } from './detailsSlice';

function MovieDetails () {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectDetailsLoadingStatus);
  const error = useSelector(selectDetailsErrorStatus);
  const details = useSelector(selectDetails);

  useEffect(() => {
    dispatch(fetchDetails(id));

    return (resetState());
  }, [id, dispatch]);

  return (
    <Container>
      {loading ?
        <Loading /> :
        error ?
          <Error /> :
          details &&
          <List>
            <Tile
            key={details.id}
            id={details.id}
            title={details.title}
            poster={details.poster_path}
            subtitle={details.release_date}
            vote={details.vote_count}
            voteAverage={details.vote_average}
            genresId={details.genres}
            />
          </List>
      }
    </Container>
  );
}
export default MovieDetails;