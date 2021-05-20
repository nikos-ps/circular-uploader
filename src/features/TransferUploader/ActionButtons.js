import { memo } from "react";
import styled from "styled-components";

import Button from "components/Button";

const ActionsContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ActionButtons = memo(({ isLoaderActive, stopLoader, startLoader }) => {
  return (
    <ActionsContainer>
      {isLoaderActive ? (
        <Button secondary onClick={stopLoader}>
          End
        </Button>
      ) : (
        <Button onClick={startLoader}>Start</Button>
      )}
    </ActionsContainer>
  );
});

export default ActionButtons;
