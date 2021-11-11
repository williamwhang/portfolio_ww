import React from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <><ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
    
    <Toaster position="bottom-right"/></>
  );
}

export default MyApp;
