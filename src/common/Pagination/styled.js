import styled, { css } from "styled-components";
import { ReactComponent as Previous } from '../images/previousArrow.svg';
import { ReactComponent as Next } from '../images/nextArrow.svg';

export const Wrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 103px 0;

  @media(max-width: ${({ theme })=> theme.breakpoints.mobile}px){
    margin: 30px 0 30px 0;;
  }
  `;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  padding: 8px 16px;
  background: ${({ theme })=> theme.colors.pattensBlue};
  font-size: 14px;
  border: none;
  border-radius: 5%;
  outline: none;
  cursor: pointer;
  transition: filter 0.3s;

  &:hover{
    filter: brightness(90%);
  }
  &:disabled{
    background: ${({ theme })=> theme.colors.mystic};
    cursor: not-allowed;
  }

  @media(max-width: ${({ theme })=> theme.breakpoints.mobile}px){
    margin-right: 8px;
  }
`;

export const ButtonText = styled.span`
  font-size: 14px;

  @media(max-width: ${({ theme })=> theme.breakpoints.mobile}px){
   display: none;
  }
`;

export const Text = styled.span`
  margin-right: 4px;
  color: ${({ theme }) => theme.colors.darkerGrey};

  @media(max-width: ${({ theme })=> theme.breakpoints.mobile}px){
   font-size: 10px;
   margin-right: 6px;
  }
`;

export const Strong = styled.strong`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  margin: 0 8px;

  @media(max-width: ${({ theme })=> theme.breakpoints.mobile}px){
    margin: 0 2px;
  }
`;

export const PrevioustArrowContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;

  @media(max-width: ${({ theme })=> theme.breakpoints.mobile}px){
    margin: unset;
  }

  fill: ${({ theme }) => theme.colors.scienceBlue};

  ${({disabled}) => disabled && css`
    fill: ${({ theme }) => theme.colors.darkerGrey};
  `}
`;
export const PreviousArrow = styled(Previous)`

`;
export const NextArrowContainer = styled(PrevioustArrowContainer)`
  margin-left: 8px;
  margin-right: unset;

  @media(max-width: ${({ theme })=> theme.breakpoints.mobile}px){
    margin: unset;
  }
`;
export const NextArrow = styled(Next)`
  fill: ${({ theme }) => theme.colors.scienceBlue};

${({disabled}) => disabled && css`
  fill: ${({ theme }) => theme.colors.darkerGrey};
`}
`;
