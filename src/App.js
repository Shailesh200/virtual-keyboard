import React, { useState } from "react";
import "./App.css";
import { Dashboard } from "./containers/Dashboard/Dashboard";

export default function App() {
  const [input, setInput] = useState("")
  const [enterClicked, setOnEnterClicked] = useState(false)
  return (
    <div className="container">
      <div className="header">
        <h1>Virtual Keyboard</h1>
      </div>
      <h3>Virtual Keyboard Example - Scrambled on interaction</h3>
      <div>
        {enterClicked && <p>You have enterred: {input}</p>}
      </div>
      <div className="wrapper">
        <Dashboard input={input} setInput={setInput} setOnEnterClicked={setOnEnterClicked} />
      </div>
      <div className="footer">
        <h4>This project was created by Shailesh. Visit the repo: <a href="https://github.com/Shailesh200/virtual-keyboard">Github</a></h4>
      </div>
    </div>
  );

}
