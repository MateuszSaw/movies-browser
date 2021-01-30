import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const HeadText = styled.p`
  font-size: 36px;
  font-weight: bold;
  line-height: 1.3;
  margin: 38px 0 0 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    font-size: 22px;
    margin: 24px 0 0 0;
  }
`;

export const Text = styled.p`
  font-size: 22px;
  max-width: 430px;
  margin: 24px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    font-size: 16px;
    margin: 16px;
  }
`;

export const Button = styled.button`
  padding: 16px 24px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.scienceBlue};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  outline: none;
  transition: linear 0.3s;

  &:hover{
    filter: brightness(110%);
  }
  &:active{
    filter: brightness(120%);
  }
`;
