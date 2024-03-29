import React from "react";
import ReactDOM from "react-dom/client";
import '../index.css';
import App from "../components/App";


if (module.hot) {
    module.hot.accept();
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );