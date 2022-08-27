import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CoffeesProvider } from "./context/CoffeesContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesProvider>
          <Router />
        </CoffeesProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
