import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//폰트 적용
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  typography: {
    fontFamily: 'MapoGoldenPier',
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
  ,document.getElementById('root')
);
