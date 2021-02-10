import styled from "styled-components";

 const Container = styled.main`
  max-width: 1368px;
  margin: auto;

  @media(max-width: ${({ theme }) => theme.breakpoints.desktop}px){
    margin: 0 16px;
  }
`;

export default Container;