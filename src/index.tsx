import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {hydrate, render} from "react-dom";


const rootElement = document.getElementById("root") as HTMLElement;
if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
} else {
    render(<App />, rootElement);
}

reportWebVitals();
