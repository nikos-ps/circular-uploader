import { StyledButton } from "./Button.styled";

const Button = ({ secondary, onClick, children }) => {
  return (
    <StyledButton secondary={secondary} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
