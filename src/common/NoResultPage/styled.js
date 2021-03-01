import styled from "styled-components";
import {ReactComponent as NoResults } from '../images/noResults.svg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15%;
`;

export const StyledNoResults = styled(NoResults)`
  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    width: 200px;
  }
`;