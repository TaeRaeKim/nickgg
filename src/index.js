import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#f9ba1b',
      contrastText: '#fafafa',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'Maple',
    subtitle1: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1.7rem',
    },
    h6: {
      fontSize: '1.5rem',
    },
    subtitle2: {
      fontSize: '1.2rem',
    },
    body1: {
      fontFamily: 'NotoSansKR',
    },
    body2: {
      fontFamily: 'NotoSansKR',
    },
    button: {
      fontSize: '1.2rem',
    },
    overline: {
      fontFamily: 'NotoSansKR',
    },
    caption: {
      fontFamily: 'NotoSansKR',
    },
  }
});


//Provider : store 사용을 위한
// ThemeProvider : mui thema 적용을 위한
// BrwserRouter : router dom을 사용하기 위한
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
