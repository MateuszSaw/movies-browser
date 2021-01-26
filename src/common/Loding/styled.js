import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  margin-top: 20%;
 `;

export const Loader = styled.img`
 animation: rotate 1s infinite linear;

  @keyframes rotate{
    to {
        transform: rotate(360deg);
    }
  }
`;