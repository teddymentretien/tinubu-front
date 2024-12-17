import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from "next/app";
import theme from "../styles/theme";
import { appWithTranslation } from 'next-i18next';
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(App);