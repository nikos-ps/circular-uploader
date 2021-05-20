import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--colors-white);
  border-radius: 10px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1), 0 10px 30px 0 rgba(0, 0, 0, 0.2);
  height: 410px;
  width: 280px;
`;

const Footer = styled.div`
  position: relative;
  margin-top: auto;
  border-top: 1px solid var(--colors-iron);
  height: 72px;
  padding: 0 20px;
`;

const Card = ({ content, actions }) => {
  return (
    <Container>
      <div>{content}</div>
      <Footer>{actions}</Footer>
    </Container>
  );
};

export default Card;
