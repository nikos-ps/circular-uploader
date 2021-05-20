import styled, { css } from "styled-components";

const secondary = `
background: transparent;
border-color: var(--colors-dodgerBlue);
color: var(--colors-dodgerBlue);

&:hover {
  background: transparent;
  border-color: var(--colors-scienceBlue);
  color: var(--colors-scienceBlue);
 }
`;

export const StyledButton = styled.button`
  background: var(--colors-dodgerBlue);
  border: 1px solid var(--colors-dodgerBlue);
  border-radius: 1.25em;
  box-sizing: border-box;
  color: var(--colors-white);
  cursor: pointer;
  display: inline-block;
  font-size: 1em;
  height: 2.5em;
  font-weight: 500;
  transition: border-color 0.2s cubic-bezier(0.77, 0, 0.175, 1),
    background-color 0.2s cubic-bezier(0.77, 0, 0.175, 1),
    color 0.2s cubic-bezier(0.77, 0, 0.175, 1);
  user-select: none;
  width: 150px;
  outline: 0;

  &:hover {
    background-color: var(--colors-scienceBlue);
    border-color: var(--colors-scienceBlue);
  }

  ${(props) =>
    props.secondary
      ? css`
          ${secondary}
        `
      : ""}
`;
