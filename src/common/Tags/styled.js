import styled from "styled-components";

export const StyledTags = styled.div`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  place-self: flex-start;
`;

export const TagsItem = styled.p`
  background-color: ${({ theme }) => theme.colors.mystic};
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  margin: 0 8px 8px 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    padding: 4px 8px;
    font-size: 10px;
  }
`;


