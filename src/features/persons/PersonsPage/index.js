import React, { useEffect } from  'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../../common/Container';
import { Error } from '../../../common/Error';
import { Header } from '../../../common/Header';
import { ListLink, TileList } from '../../../common/List';
import { Loading } from '../../../common/Loding';
import { NoResultPage } from '../../../common/NoResultPage';
import { Pagination } from '../../../common/Pagination';
import PersonTile from '../../../common/Tile/PersonTile';
import { useQueryParameter } from '../../../queryParameters';
import { toPersonDetails } from '../../../routes';
import { search as searchQueryParamName } from '../../../searchQueryParamName';
import { fetchPersons, selectErrorStatus, selectLoadingStatus, selectPersonsList, selectTotalPages } from '../personsSlice';

function PersonsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);
  const error = useSelector(selectErrorStatus);
  const query = useQueryParameter(searchQueryParamName);
  const personsList = useSelector(selectPersonsList);
  const totalPages = useSelector(selectTotalPages);
  const page = useQueryParameter('page');

  useEffect(() => {
    dispatch(fetchPersons({ page: page || 1, query }));
  }, [dispatch, page, query]);

  return (
    <Container>
      {loading
        ? <Loading />
        : error
          ? <Error />
          : personsList.length === 0 ?
          <NoResultPage query={query} />
          : personsList.length &&
        <>
          <Header>{!query ? "Popular people" : `Search results for "${query}" (${personsList.length})`}</Header>
          <TileList persons>
            {personsList.map(person => (
              <ListLink
                key={person.id}
                to={toPersonDetails(person)}
              >
              <PersonTile
                key={person.id + person.character}
                id={person.id}
                name={person.name}
                poster={person.profile_path}
              />
          </ListLink>
            ))}
          </TileList>
        </>
        }
      <Pagination actualPage={page} totalPages={totalPages} />
    </Container>
  );
};

export default PersonsPage;