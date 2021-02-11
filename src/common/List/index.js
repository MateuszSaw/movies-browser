import React from 'react';
import { Wrapper } from './styled.js'

export const List = ({ movies, persons, children }) => {
  return (
    <Wrapper
      movies={movies}
      persons={persons}
    >
      {children}
    </Wrapper>
  );
};

export default List;