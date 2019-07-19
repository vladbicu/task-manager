import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return <div>Welcome!</div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
