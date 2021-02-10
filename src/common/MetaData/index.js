import React from 'react'
import { Content, Wrapper, Item } from './styled'

const MetaData = ({production, releaseDate}) => {

  const formatDate = (date) => {
    return new Date(date).toLocaleString(undefined, {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
  };

  return(
    <Content>
      {production &&
        <Wrapper>
          Production:
        </Wrapper>
      }
      <Item>
      {production?.map((country) => country.name).join(", ")}
      </Item>
      <br />
      {releaseDate &&
        <Wrapper>
          Release date:
        </Wrapper>
      }
      <Item>
        {formatDate(releaseDate)}
      </Item>
    </Content>
  );
};

export default MetaData;