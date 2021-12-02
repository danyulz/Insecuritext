import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import scrollText from './components/ScrollText/scrollText';

ReactDOM.render(
  <React.StrictMode>
    <scrollText/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
