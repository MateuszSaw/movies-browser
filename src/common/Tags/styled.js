import styled from "styled-components";

export const StyledTags = styled.li`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
`;

export const TagsItem = styled.li`
  background-color: ${({ theme }) => theme.colors.mystic};
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  margin: 0 16px 16px 0;
`;