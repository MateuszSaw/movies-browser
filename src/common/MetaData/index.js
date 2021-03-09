import React from 'react'
import { Content, Wrapper, Item } from './styled'

const MetaData = ({production, releaseDate, birthDate, birthPlace, personDetails }) => {

  const formatDate = (date) => {
    return new Date(date).toLocaleString(undefined, {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
  };

  return(
    <Content>
      {(production || birthDate) &&
        <>
          <Wrapper displayOnMobile={personDetails}>
            {production ? "Production:" : personDetails ? "Birth:" : "Date of birth:"}
          </Wrapper>
          <Item>
            {production?.map((country) => country.name).join(", ") || formatDate(birthDate)}
          </Item>
        </>
      }
      <br />
      {(releaseDate || birthPlace) &&
      <>
        <Wrapper displayOnMobile={personDetails}>
          {releaseDate ? "Release date:" : "Place of birth:"}
        </Wrapper>
        <Item>
          {birthPlace || formatDate(releaseDate)}
        </Item>
      </>
      }

    </Content>
  );
};

export default MetaData;