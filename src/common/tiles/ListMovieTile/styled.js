import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: unset;
  transition: 0.3s;

  &:hover{
  transform: scale(1.05);
  }
`;

export const Wrapper = styled.div`
  width: 324px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr;
`;

export const Content = styled.div`
`;

