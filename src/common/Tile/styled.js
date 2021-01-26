import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme })=> theme.colors.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  padding: 40px;

  ${({ movies }) => movies && css`
    padding: 16px;
  `}
`;

export const Poster = styled.img`
  width: 312px;
  height: 464px;


  ${({ movies }) => movies &&css`
    width: 292px;
    height: 434px;
    border-radius: 5px;
  `};
`;

export const TileContent = styled.div`
`;

export const Title = styled.header`
  font-weight: 600;
  font-size: 36px;

  ${({ movies }) => movies &&css`
    font-weight: 500;
    font-size: 22px;
    padding-top: 16px;
  `};
`;

export const Subtitle = styled.p`
  font-size: 22px;
  margin-top: 24px;
  font-weight: normal;

  ${({ movies }) => movies &&css`
    font-weight: normal;
    font-size: 16px;
    margin: 0;
    padding: 8px 0;
    color: ${({ theme }) => theme.colors.darkerGrey};
  `};
`;

export const Details = styled.div`
  font-size: 18px;
  line-height: 1.5;
  margin-top: 24px;
`;

export const DetailsCategory = styled.span`
  color: ${({ theme }) => theme.colors.stormGray};
  margin-right: 8px;

`;

export const RatesWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: flex-end;
`;

export const StarIcon = styled.img`
  margin-right: 8px;

`;

export const AverageRate = styled.span`
  font-size: 16px;
  margin-right: 8px;
`;


export const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin-top: 24px;
`;