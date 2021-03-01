import React from 'react';
import { StyledNavLink, List, Item, LogoImage, NavigationContent, NavigationWrapper, StyledLink, StyledNavigation } from './styled';
import camera from '../images/camera.svg'
import { toMovieDetails, toMoviesPage } from '../../routes';
import { Search } from './Search';

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavigationWrapper>
        <NavigationContent>
            <StyledLink to={toMoviesPage()}>
              <LogoImage src={camera} alt=''/>
                Movies Browser
            </StyledLink>
          <List>
            <Item>
              <StyledNavLink to={toMoviesPage()}>Movies</StyledNavLink>
            </Item>
            {/* <Item>
              <StyledNavLink to={toMovieDetails()}>People</StyledNavLink>
            </Item> */}
          </List>
        </NavigationContent>
        <Search />
      </NavigationWrapper>
    </StyledNavigation>
  );
};

export default Navigation;