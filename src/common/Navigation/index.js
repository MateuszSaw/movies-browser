import React from 'react';
import { StyledNavLink, List, Input, Item, InputWrapper, LogoImage, NavigationContent, NavigationWrapper, SearchImage, StyledLink, StyledNavigation } from './styled';
import camera from '../images/camera.svg'
import search from '../images/search.svg'
import { toMovieDetails, toMoviesList } from '../../routes';

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavigationWrapper>
        <NavigationContent>
            <StyledLink to={toMoviesList()}>
              <LogoImage src={camera} alt=''/>
                Movies Browser
            </StyledLink>
          <List>
            <Item>
              <StyledNavLink to={toMoviesList()}>Movies</StyledNavLink>
            </Item>
            <Item>
              <StyledNavLink to={toMovieDetails()}>People</StyledNavLink>
            </Item>
          </List>
        </NavigationContent>
        <InputWrapper>
          <SearchImage src={search} alt=''/>
          <Input placeholder = "Search for movies ..."/>
        </InputWrapper>
      </NavigationWrapper>
    </StyledNavigation>
  );
};

export default Navigation;