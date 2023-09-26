import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './satoshi.css';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster position='top-right' reverseOrder={true} />
    {/* <Provider store={''}> */}
    <Router>
      <App />
    </Router>
    {/* </Provider> */}
  </React.StrictMode>
);
