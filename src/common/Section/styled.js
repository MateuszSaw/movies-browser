import styled from "styled-components";

export const Wrapper = styled.div``;

export const Header = styled.header`
  font-size: 36px;
  font-weight: 600;
  margin: 56px 0 24px 0;
  padding: 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    font-size: 18px;
    margin-top: 24px;
  }
`;

export const Body = styled.div``;

