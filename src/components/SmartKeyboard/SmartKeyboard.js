import React from 'react';
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

export function SmartKeyboard(props) {
  const { keyboard, layoutName, onChange, onKeyPress } = props;
  return (
    <Keyboard
      keyboardRef={r => (keyboard = r)}
      layoutName={layoutName}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  )
}