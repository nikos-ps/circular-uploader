import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import { theme, GlobalStyles } from "./theme";
import TransferUploader from "features/TransferUploader";

const Main = styled.main`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main>
        <TransferUploader />
      </Main>
    </ThemeProvider>
  );
}

export default App;
