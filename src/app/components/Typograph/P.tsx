import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    color: red;
    transform: scale(1);
  }
  50% {
    color: orange;
    transform: scale(1.2);
  }
  100% {
    color: red;
    transform: scale(1);
  }
`;

const P = styled.p`
  font-size: 1rem;
  color: red;
  animation: ${pulse} 2s infinite; /* Pulse animation, lasts 2 seconds, repeats infinitely */
`;

export default P;
