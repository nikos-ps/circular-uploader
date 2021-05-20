import styled from "styled-components";

const Text = styled.span`
  ${({ theme, size }) => size && theme.typography[size]}
`;

export default Text;
