import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
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
    <>
     in progress ... 
    </>
  );
};

export default PersonDetails;