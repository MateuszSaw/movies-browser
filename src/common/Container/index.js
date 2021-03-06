import styled from "styled-components";

 const Container = styled.main`
  max-width: 1368px;
  margin: auto;
  margin-bottom: 100px;

  @media(max-width: ${({ theme }) => theme.breakpoints.desktop}px){
    margin: 16px;
  }
`;

export default Container;