import React from 'react';
import { BrowserRouter} from 'react-router-dom';

import { Reset } from 'styled-reset'
import { ThemeProvider } from 'styled-components';
import ResetStyle from './assets/style/ResetStyle';

import theme from './assets/style/theme';
import ScrollTop from './common/scrollTop';

import Header from './components/Header';
import Router from './components/Router';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Reset/>
        <ResetStyle/>
        <BrowserRouter>
        <ScrollTop />

				<Header />
        <Router />
        <Footer />
			</BrowserRouter>
      </ThemeProvider>
    </>
  );

}


export default App;
