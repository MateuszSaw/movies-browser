import styled from "styled-components";

export const Wrapper = styled.div``;

export const Header = styled.header`
  font-size: 36px;
  font-weight: 600;
  margin: 64px 0 32px 0;
  padding: 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    font-size: 20px;
    margin: 21px 0 12px 0;
  }
`;

export const Body = styled.div``;

