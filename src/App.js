import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./page/Home";
import About from "./page/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import AlertState from './context/AlertState'
import FirebaseState from "./context/FirebaseState";


function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <div className="App">
            <div className="container">
              <Navbar />
              <h1>React-Firebase</h1>
              <Alert />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
