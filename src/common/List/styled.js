import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
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
    grid-template-columns: repeat(auto-fill, 208px);

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
      grid-template-columns: repeat(auto-fill, 152px);
    }
  `};
`;