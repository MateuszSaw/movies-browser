import React from 'react';
import { StyledHeader } from './styled';
const Header = ({title}) => {
  return (
    <StyledHeader>{title}</StyledHeader>
  )
};

export default Header;