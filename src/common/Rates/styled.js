import styled, { css } from "styled-components";
import { ReactComponent as StarIcon } from '../images/star.svg'

export const RatesWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  max-width: 200px;
  flex-wrap: wrap;
  gap: 16px 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    margin-top: 4px;
    align-items: flex-end;
  }
  ${({ movies }) => movies && css`
    margin-top: 10px;
  `};
`;

export const Star = styled(StarIcon)`
  width: auto;
  height: 24px;
  margin-right: 8px;
 transform: translateY(-8%);

  ${({ backdrop }) => backdrop && css`
    height: 40px;
  `};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    height: 16px;
  };
`;

export const VoteAverage = styled.span`
  font-size: 22px;
  margin-right: 8px;
  font-weight: 500;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    font-size: 14px;
    font-weight: 600;
  }

  ${({ movies }) => movies && css`
    font-weight: bold;
    font-size: 16px;
  `};

  ${({ backdrop }) => backdrop && css`
    font-size: 30px;
  `};
`;

export const Votes = styled(VoteAverage)`
  font-size: 14px;
  font-weight: normal;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    font-size: 13px;
    color: ${({ theme }) => theme.colors.darkerGrey};
  }

  ${({ movies }) => movies && css`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.darkerGrey};
  `};

  ${({ backdrop }) => backdrop && css`
    font-size: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
      color: ${({ theme }) => theme.colors.white};
      font-size: 10px;
    }
  `};
`;

export const MaxPoint = styled(Votes)`
  font-size: 14px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    display: none;
  }
  ${({ backdrop }) => backdrop && css`
    font-size: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    display: unset;
    font-size: 10px;
  }
  `}
`;
