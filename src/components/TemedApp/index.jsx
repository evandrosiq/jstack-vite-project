import { useContext } from "react";
import GlobalStyle from '../../styles/global';
import Layout from '../Layout';
import { LayoutContext } from "../../context/LayoutContext";
import { ThemeProvider } from "styled-components";

function ThemedApp() {
  const { currentTheme } = useContext(LayoutContext);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export default ThemedApp;