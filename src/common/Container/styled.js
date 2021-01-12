import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 1368px;
  margin: auto;

  @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px){
    margin: 0 16px;
  }
`;