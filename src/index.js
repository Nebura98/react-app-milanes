import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/styles.scss'
import { MilanesApp } from './MilanesApp';

ReactDOM.render(
  <React.StrictMode>
    <MilanesApp />
  </React.StrictMode>,
  document.getElementById('root')
);
