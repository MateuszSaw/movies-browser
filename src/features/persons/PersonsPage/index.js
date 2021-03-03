import React, { useEffect } from  'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../../common/Container';
import { Error } from '../../../common/Error';
import { Header } from '../../../common/Header';
import { TileList } from '../../../common/List';
import { Loading } from '../../../common/Loding';
import { Pagination } from '../../../common/Pagination';
import PersonTile from '../../../common/Tile/PersonTile';
import { useQueryParameter } from '../../../queryParameters';
import { fetchPersons, selectErrorStatus, selectLoadingStatus, selectPersonsList, selectTotalPages } from '../personsSlice';

function PersonsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);
  const error = useSelector(selectErrorStatus);
  const personsList = useSelector(selectPersonsList);
  const totalPages = useSelector(selectTotalPages);
  const page = useQueryParameter('page');
  console.log(personsList);

  useEffect(() => {
    dispatch(fetchPersons({ page: page || 1 }));
  }, [dispatch, page]);

  return (
    <Container>
      {loading
        ? <Loading />
        : error
          ? <Error />
          : personsList.length
        && (
        <>
          <Header>Popular people</Header>
          <TileList persons>
            {personsList.map((person) => (
              <PersonTile
                key={person.id + person.character}
                id={person.id}
                name={person.name}
                poster={person.profile_path}
              />
            ))}
          </TileList>
        </>
        )}
      <Pagination actualPage={page} totalPages={totalPages} />
    </Container>
  );
};

export default PersonsPage;