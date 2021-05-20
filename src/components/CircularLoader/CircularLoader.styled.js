import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: block;
  margin: 30px auto 12px;
  position: relative;
  width: 170px;
`;

const rotation = keyframes`
   from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1turn);
  }
`;

export const RotatingCircle = styled.circle`
  border-radius: 10px;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.2s linear, stroke 0.2s linear;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  animation: ${rotation} 2s linear infinite;
`;

export const Label = styled.span`
  color: var(--colors-woodSmoke);
  font-size: 3.875em;
  left: 50%;
  line-height: 1;
  margin: -2px 0 0 2px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;

  span {
    color: var(--colors-silverSand);
    display: inline-block;
    font-size: 22px;
    line-height: 1;
    position: relative;
    top: 9px;
    vertical-align: top;
  }
`;
