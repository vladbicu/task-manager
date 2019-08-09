import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";

// class App extends React.Component {
//   render() {
//     return <div>Welcome!</div>;
//   }
// }

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route />
      </Switch>
    </Router>
  );
};

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
