import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const StyledNavigation = styled.nav`
  background-color: ${({ theme }) => theme.colors.black};
  position: relative;
  z-index: 1;
`
export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media(max-width: ${({ theme })=> theme.breakpoints.tablet}px){
    padding: 0 16px;
  }

  @media(max-width: ${({ theme })=> theme.breakpoints.mobile}px){
    flex-wrap: wrap;
    padding: 16px;
  }
`;

export const NavigationContent = styled.div`
  display: flex;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  margin-right: 16px;
  font-size: 24px;

  @media(max-width: ${({ theme })=> theme.breakpoints.mobile}px){
    width: 24px;
    margin-right: 10px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 500;
  margin-right: 67px;

  @media(max-width: ${({ theme })=> theme.breakpoints.mobile}px){
    font-size: 13px;
    margin-right: 20px;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
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

  @media(max-width: ${({ theme })=> theme.breakpoints.mobile}px){
    font-size: 12px;
    padding: 13.5px 16px;
  }

&.${activeClassName} {
 font-weight: bold;
 border: 1px solid ${({ theme }) => theme.colors.white};
 border-radius: 24px;
}
`;