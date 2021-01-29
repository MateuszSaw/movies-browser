import styled, { css } from "styled-components";

export const RatesWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: flex-end;

  ${({ movies }) => movies && css`
    margin-top: 12px;
  `};
`;

export const StarIcon = styled.img`
  margin-right: 8px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    width: 16px;
  }

`;

export const VoteAverage = styled.span`
  font-size: 16px;
  margin-right: 8px;

  ${({ movies }) => movies && css`
    font-weight: bold;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
      font-size: 13px;
    }
  `};
`;

export const Votes = styled(VoteAverage)`
  font-weight: normal;

  ${({ movies }) => movies && css`
    color: ${({ theme }) => theme.colors.darkerGrey};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
      font-size: 13px;
    }
  `};
`;