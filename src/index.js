import React from "react";
import ReactDOM from "react-dom";

import App from './App';

import "./components/header/header.scss";
import "./components/main/common.scss";
import "./components/footer/footer.scss";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
    <App />,
    document.getElementById('root')
);