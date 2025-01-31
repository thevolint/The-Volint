import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
const theme=createTheme();

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}> <App /></ThemeProvider>
    </StyledEngineProvider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
