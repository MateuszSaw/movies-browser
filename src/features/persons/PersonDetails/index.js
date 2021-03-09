import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Container from '../../../common/Container';
import { Error } from '../../../common/Error';
import { Loading } from '../../../common/Loding';
import Tile from '../../../common/Tile';
import { fetchPersonsDetails, selectPersonsDetails, resetState, selectPersonsDetailsErrorStatus, selectPersonsDetailsLoadingStatus } from './personsDetailsSlice';

function PersonDetails () {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectPersonsDetailsLoadingStatus);
  const error = useSelector(selectPersonsDetailsErrorStatus);
  const details = useSelector(selectPersonsDetails);

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
          <Tile
            personDetails
            title={details.name}
            poster={details.profile_path}
            birthPlace={details.place_of_birth}
            birthDate={details.birthday}
            description={details.biography}
          />

      }
    </Container>
  );
};

export default PersonDetails;