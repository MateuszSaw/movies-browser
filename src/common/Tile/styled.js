import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme })=> theme.colors.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  padding: 40px;
  max-width: 1368px;
  display: block;
  min-height: 544px;
  margin-top: 56px;

  @media(max-width: ${({ theme })=> theme.breakpoints.mobile}px){
    padding: 16px;
    min-height: unset;
    display: grid;
    grid-template-columns: 130px 1fr;
    grid-template-areas:
    "image content"
    "description description"
    ;
  }

  ${({ movies }) => movies && css`
    display: grid;
    grid-gap: 0 16px;
    grid-template-rows: auto 1fr;
    width: unset;
    padding: 16px;

    @media(max-width: ${({ theme })=> theme.breakpoints.mobile}px){
      grid-template-columns: auto 1fr;
      grid-gap: unset;
    }
  `}
`;

export const Poster = styled.img`
  width: 312px;
  height: 464px;
  object-position: center center;
  object-fit: cover;
  background-color: ${({ theme }) => theme.colors.silver};
  border-radius: 5px;
  float: left;
  margin-right: 40px;

  @media(max-width: ${({ theme })=> theme.breakpoints.mobile}px){
      width: 114px;
      height: 169px;
      margin-bottom: initial;
      margin-right: 16px;
      grid-area: image;
    }

  ${({ movies }) => movies && css`
    width: 292px;
    height: 434px;
    margin: 0 0 16px 0;
  `};

  ${({ noImage }) => noImage && css`
    object-fit: scale-down;
  `};
`;

export const TileContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
      min-height: 130px;
      flex-wrap: nowrap;
    }

  ${({movies}) => movies && css`
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
      justify-content: start;
      min-height: unset;
    }
  `};
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr;

  ${({ metaDataOnMobile }) => metaDataOnMobile && css`
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
      grid-gap: unset;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: space-between;
      height: 100%;
    };
  `};

  ${({ movies }) => movies && css`
    grid-gap: 8px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
      grid-area: content;
    }
  `}
`;

export const Title = styled.header`
  font-weight: 600;
  font-size: 36px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    font-size: 16px;
    font-weight: 500;
  }

  ${({ movies }) => movies &&css`
    font-weight: 500;
    font-size: 22px;
  `};
`;

export const Subtitle = styled.p`
  font-size: 22px;
  font-weight: normal;
  margin: 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    font-size: 13px;
    color: ${({ theme }) => theme.colors.darkerGrey};
  }

  ${({ movies }) => movies && css`
    font-weight: normal;
    font-size: 16px;
    margin: 0;
    color: ${({ theme }) => theme.colors.darkerGrey};

  `};
`;

export const Description = styled.p`
  font-size: 20px;
  margin: 24px 0 0 0 ;
  line-height: 1.6;
  text-align: justify;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    margin: 16px 0 0 0 ;
    font-size: 14px;
    grid-area: description;

  }
`;