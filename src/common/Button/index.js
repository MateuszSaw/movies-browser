import styled from "styled-components";

export const Button = styled.button`
  padding: 12px 24px;
  border-radius: 5px;
  border: none;
  align-items: center;
  margin: 24px 0 0 0;
  background: ${({ theme })=> theme.colors.pattensBlue};
  font-size: 20px;
  cursor: pointer;
  outline: none;
  transition: 0.3s;

  &:hover{
    transform: scale(1.1);
  }
  &:active{
    transform: scale(1.2);
  }
`;