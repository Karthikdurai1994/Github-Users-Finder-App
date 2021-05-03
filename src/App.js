import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import UserDetails from "./components/users/UserDetails";
import GlobalProvider from "./context1/Provider";
import Home from "./components/pages/Home";
import PageNotFound from "./components/pages/PageNotFound";
import "./App.css";

const App = () => {
  // UI
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github"></Navbar>
          <div className="container">
            <Alert alert={alert}></Alert>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={UserDetails} />
              <Route path="*" component={PageNotFound}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </GlobalProvider>
  );
};

export default App;
