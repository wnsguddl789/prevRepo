import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';
import GlobalNavigatorBar from './components/GlobalNavigatorBar';
import CarouSel from './components/CarouSel';
import './style/reset.css';
import './style/font.css';
ReactDOM.render(
  <React.StrictMode>
    <GlobalNavigatorBar />
    <CarouSel />
  </React.StrictMode>,
  document.getElementById('root')
);

