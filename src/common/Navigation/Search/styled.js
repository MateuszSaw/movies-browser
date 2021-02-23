import styled from "styled-components";

export const InputWrapper = styled.div`
display: flex;
border-radius: 24px;
background-color: rgb(255, 255, 255);
margin: 24px 0px 24px 24px;
padding-left: 26px;
width: 432px;
height: 48px;

@media(max-width: ${({ theme })=> theme.breakpoints.mobile}px){
margin: 20px 0 0 0;
}
`;

export const Input = styled.input`
border: none;
font-size: 14px;
color: ${({ theme }) => theme.colors.darkerGrey};
margin-left: 10px;
outline: none;
`;

export const SearchImage = styled.img`
width: 24px;
`;