import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  padding: 16px;
  display: grid;
  text-align: center;

  @media(max-width:${({theme})=> theme.breakpoints.mobile}px){
    padding: 8px;
  }
`;
export const Image = styled.img`
  width: 222px;
  object-position: center center;
  object-fit: cover;
  background-color: ${({ theme }) => theme.colors.silver};
  border-radius: 5px;

  @media(max-width:${({theme})=> theme.breakpoints.mobile}px){
    width: 136px;
  }
`;

export const Name = styled.span`
  padding-top: 16px;
  font-size: 22px;
  font-weight: 500;
  margin: 0;

  @media(max-width:${({theme})=> theme.breakpoints.mobile}px){
    font-size: 14px;
  }
`;

export const Role = styled.p`
  font-size: 18px;
  margin: 0;
  color: ${({ theme }) => theme.colors.darkerGrey};

  @media(max-width:${({theme})=> theme.breakpoints.mobile}px){
    font-size: 13px;
  }
`;