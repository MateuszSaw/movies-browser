import styled, { css } from "styled-components";
import { ReactComponent as Previous } from '../images/previousArrow.svg';
import { ReactComponent as Next } from '../images/nextArrow.svg';

export const Wrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 103px 0;
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
`;

export const Text = styled.span`
  margin-right: 4px;
  color: ${({ theme }) => theme.colors.darkerGrey};
`;

export const Strong = styled.strong`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  margin: 0 8px;
`;

export const Image = styled.img`
  margin-right: 8px;


`;
export const PreviousArrow = styled(Previous)`
  margin-right: 8px;
  fill: ${({ theme }) => theme.colors.scienceBlue};

  ${({disabled}) => disabled && css`
    fill: ${({ theme }) => theme.colors.darkerGrey};
  `}
`;
export const NextArrow = styled(Next)`
  margin-left: 8px;
  fill: ${({ theme }) => theme.colors.scienceBlue};

  ${({disabled}) => disabled && css`
    fill: ${({ theme }) => theme.colors.darkerGrey};
  `}
`;
