import React from 'react';
import { useLocation } from 'react-router';
import { useQueryParameter, useReplaceQueryParameter } from '../../../queryParameters';
import { toMoviesPage } from '../../../routes';
import { search as searchQueryParamName } from '../../../searchQueryParamName';
import search from '../../images/search.svg'
import { Input, InputWrapper, SearchImage } from './styled';

export const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();
  const location = useLocation();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined
    });
  };

  return (
    <InputWrapper>
      <SearchImage src={search} alt=''/>
      <Input
        placeholder= {`Search for ${location.pathname.startsWith(toMoviesPage()) ? "movies" : "people"} ...`}
        value = {query || ""}
        onChange={onInputChange}
      />
    </InputWrapper>
  );
};