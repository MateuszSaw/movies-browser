import styled from "styled-components";

export const StyledTags = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

export const TagsItem = styled.li`
  background-color: ${({ theme }) => theme.colors.mystic};
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  margin: 0 8px 8px 0;
`;


