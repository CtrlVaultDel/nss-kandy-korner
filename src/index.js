// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Route }  from "react-router-dom";
import { KandyKorner } from "./components/KandyKorner.js";
import './index.css';

// Specify where components will be rendered to
ReactDOM.render(
  <React.StrictMode>
    <Route>
      <KandyKorner />
    </Route>
  </React.StrictMode>,
  document.getElementById('root')
);