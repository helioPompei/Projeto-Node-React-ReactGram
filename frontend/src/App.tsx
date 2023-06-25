import { AppRoutes } from "./routes/AppRoutes";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaultTheme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppRoutes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
