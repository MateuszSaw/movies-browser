import React from 'react';
import { useQueryParameter, useReplaceQueryParameter } from '../../../queryParameters';
import searchQueryParamName from '../../../searchQueryParamName';
import search from '../../images/search.svg'

import { Input, InputWrapper, SearchImage } from './styled';

export const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined
    })
  };
  return (
    <InputWrapper>
      <SearchImage src={search} alt=''/>
      <Input
        placeholder= "Search for movies ..."
        value = {query || ""}
        onChange={onInputChange}
      />
    </InputWrapper>
  );
};