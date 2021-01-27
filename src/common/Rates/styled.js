import styled, { css } from "styled-components";

export const RatesWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: flex-end;

  ${({ movies }) => movies && css`
    margin-top: unset;
  `};
`;

export const StarIcon = styled.img`
  margin-right: 8px;

`;

export const VoteAverage = styled.span`
  font-size: 16px;
  margin-right: 8px;

  ${({ movies }) => movies && css`
    font-size: 16px;
    font-weight: bold;
  `};
`;

export const Votes = styled(VoteAverage)`
  font-weight: normal;

  ${({ movies }) => movies && css`
    color: ${({ theme }) => theme.colors.darkerGrey};
  `};
`;