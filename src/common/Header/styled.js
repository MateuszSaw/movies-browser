import styled from "styled-components";

export const StyledHeader = styled.header`
  font-size: 36px;
  font-weight: 600;
  margin-top: 56px;
  padding: 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    font-size: 18px;
    margin-top: 24px;
  }
`;