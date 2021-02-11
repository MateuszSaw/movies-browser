import React from 'react'
import { Wrapper, Image, Name, Role } from './styled';
import noPerson from '../../images/noPerson.svg';

const PersonTile = ({ name, role, poster }) => {
  return(
    <Wrapper>
      <Image
        src={poster ?
        `https://image.tmdb.org/t/p/w342/${poster}`:
        noPerson
      }/>
      <Name>{name}</Name>
      <Role>{role}</Role>
    </Wrapper>
  );
}

export default PersonTile;