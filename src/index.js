import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import ReactDOM from 'react-dom';
import GlobalNavigatorBar from './components/GlobalNavigatorBar';
import CarouSel from './components/CarouSel';
import './style/reset.css';
import styled from 'styled-components';
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <GlobalNavigatorBar />
      <CarouSel />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
