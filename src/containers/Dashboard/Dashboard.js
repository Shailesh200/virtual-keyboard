import React, { useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "./Dashboard.css";
import { defaultLayout, randomizeKeysDefault, randomizeKeysShift, shiftLayout, isLetter } from "../../utils"


export const Dashboard = (props) => {
  const { input, setInput, setOnEnterClicked } = props;
  const [layoutName, setLayoutName] = useState("default")
  const [visible, setVisible] = useState(false)
  const keyboard = useRef();
  const [layout, setLayout] = useState({
    default: defaultLayout,
    shift: shiftLayout
  })

  const onChange = input => {
    setOnEnterClicked(false)
    setInput(input);
  };

  const onKeyPress = button => {
    if (button === "{shift}" || button === "{lock}") handleShift();

    if (button === "{enter}") onEnter();

    if (isLetter(button)) {
      setLayout({
        default: randomizeKeysDefault(),
        shift: randomizeKeysShift()
      })
    }
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayoutName(newLayoutName);
  };

  const onChangeInput = event => {
    const inp = event.target.value;
    setInput(inp);
    keyboard.current.setInput(inp);
  };

  const onEnter = () => {
    setOnEnterClicked(true)
    hideKeyboard()
  }

  const onReset = () => {
    setInput("")
    setOnEnterClicked(false)
    hideKeyboard()
  }

  const showKeyboard = () => {
    setVisible(true)
  }

  const hideKeyboard = () => {
    setVisible(false)
  }

  return (
    <div className="App">
      <div className="input-container">
        <input
          value={input}
          placeholder={"Tap here to start"}
          onChange={onChangeInput}
          onFocus={showKeyboard}
        />
        <button onClick={onReset} className="reset">Clear</button>
      </div>
      {
        visible && (
          <Keyboard
            keyboardRef={r => (keyboard.current = r)}
            layoutName={layoutName}
            layout={{
              'default': layout.default,
              'shift': layout.shift
            }}
            onChange={onChange}
            onKeyPress={onKeyPress}
          />
        )
      }
    </div>
  );

}