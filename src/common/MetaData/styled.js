import styled from "styled-components";

export const Content = styled.div``;

export const Wrapper = styled.span`
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.stormGray};
  margin: 0 8px 0 0;
  padding: 0;

  @media(max-width:${({ theme }) => theme.breakpoints.mobile}px){
    display: none;
  }
`;

export const Item = styled.span`
  color: ${({ theme }) => theme.colors.black};

  @media(max-width:${({ theme }) => theme.breakpoints.mobile}px){
    font-size: 12px;
  }

`;
