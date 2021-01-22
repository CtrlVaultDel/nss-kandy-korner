// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { KandyKorner } from "./components/KandyKorner.js";

// Specify where components will be rendered to
ReactDOM.render(
  <React.StrictMode>
    <KandyKorner />
  </React.StrictMode>,
  document.getElementById('root')
);