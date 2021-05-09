import React, { Component } from "react";
import "./App.css";
import Dashboard from "./containers/Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>CommerceIQ Assignment</h1>
        </div>
        <h3>Virtual Keyboard Example - Scrambled on interaction</h3>
        <div className="wrapper">
          <Dashboard />
        </div>
      </div>
    );
  }
}
export default App;
