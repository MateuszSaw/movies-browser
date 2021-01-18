import styled, { css } from "styled-components";

export const StyledTags = styled.li`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const TagsItem = styled.li`
  background-color: ${({ theme }) => theme.colors.mystic};
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  margin: 0 8px 8px 0;
`;


