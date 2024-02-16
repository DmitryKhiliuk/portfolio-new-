import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {hydrate, render} from "react-dom";
import ReactDOM from "react-dom/client";


/*const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);*/


const rootElement = document.getElementById("root") as HTMLElement;
if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
} else {
    render(<App />, rootElement);
}

reportWebVitals();
