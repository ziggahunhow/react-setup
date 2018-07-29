import React from "react";
import ReactDOM from "react-dom";
import './style/app.scss';

const Index = () => {
  return <h1>Hello React!</h1>;
};

ReactDOM.render(<Index />, document.getElementById("index"));