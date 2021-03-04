import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const TileList = styled.div`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, 324px);
  grid-gap: 24px;
  justify-content: center;
  padding: 0;
  margin: 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    grid-template-columns: auto;
    grid-gap: 16px;
  }

  ${({persons}) => persons && css`
    grid-template-columns: repeat(auto-fill, 254px);

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
      grid-template-columns: repeat(auto-fill, 152px);
    }
  `};
`;

export const ListLink = styled(Link)`
  display: grid;
  align-items: stretch;
  text-decoration: none;
  color: unset;
  transition: 0.3s;

  &:hover{
    transform: scale(1.1);
  }
`;