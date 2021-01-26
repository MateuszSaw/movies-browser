import styled, { css } from 'styled-components';

export const List = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 40px;
  justify-content: center;

  ${({ movies }) => movies &&css`
    grid-template-columns: repeat(auto-fill, 324px);
    grid-gap: 24px;
  `}
`;

export default List;