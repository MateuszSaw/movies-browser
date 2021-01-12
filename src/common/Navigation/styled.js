import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const NavigationWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-evenly;
`;

export const NavigationContent = styled.div`
  display: flex;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const Span = styled.span``;
export const LogoImage = styled.img`
  margin-right: 16px;
  font-size: 24px;

`;
export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 500;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;
export const Item = styled.li``;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  padding: 13.5px 24px;
  font-size: 14px;
  text-transform: uppercase;

&.${activeClassName} {
 font-weight: bold;
 border: 1px solid ${({ theme }) => theme.colors.white};
 border-radius: 24px;
}
`;

export const InputWrapper = styled.div`
  display: flex;
  border-radius: 24px;
  background-color: rgb(255, 255, 255);
  margin: 24px 0px 24px 24px;
  padding-left: 26px;
  width: 432px;
  height: 48px;
`;

export const Input = styled.input`
 border: none;

`;
export const SearchImage = styled.img``;