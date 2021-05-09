import React, { Component } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "./Dashboard.css";
import { defaultLayout, randomizeKeysDefault, randomizeKeysShift, shiftLayout, isLetter } from "../../utils"

class Dashboard extends Component {
  state = {
    layoutName: "default",
    input: "",
    layout: {
      default: defaultLayout,
      shift: shiftLayout
    },
    visible: false
  };

  onChange = input => {
    this.setState({ input });
  };

  onKeyPress = button => {
    if (button === "{shift}" || button === "{lock}") this.handleShift();

    if (isLetter(button)) {
      this.setState({
        layout: {
          default: randomizeKeysDefault(),
          shift: randomizeKeysShift()
        }
      })
    }
  };

  handleShift = () => {
    const layoutName = this.state.layoutName;

    this.setState({
      layoutName: layoutName === "default" ? "shift" : "default"
    });
  };

  onChangeInput = event => {
    const input = event.target.value;
    this.setState({ input });
    this.keyboard.setInput(input);
  };

  onReset = () => {
    this.setState({
      input: ""
    })
  }

  showKeyboard = () => {
    this.setState({
      visible: true
    })
  }

  hideKeyboard = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <div className="App">
        <div className="input-container">
          <input
            value={this.state.input}
            placeholder={"Tap here to start"}
            onChange={this.onChangeInput}
            onFocus={this.showKeyboard}
          />
          <button onClick={this.onReset} className="reset">Clear</button>
        </div>
        {
          this.state.visible && (
            <Keyboard
              keyboardRef={r => (this.keyboard = r)}
              layoutName={this.state.layoutName}
              layout={{
                'default': this.state.layout.default,
                'shift': this.state.layout.shift
              }}
              onChange={this.onChange}
              onKeyPress={this.onKeyPress}
            />
          )
        }
      </div>
    );
  }
}
export default Dashboard;
