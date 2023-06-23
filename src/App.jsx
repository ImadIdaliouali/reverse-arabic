import React, { useState } from "react";
import Keyboard from "react-simple-keyboard";
import layout from "simple-keyboard-layouts/build/layouts/arabic";
import "react-simple-keyboard/build/css/index.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [reverseText, setReverseText] = useState("");
  const [keyboard, setKeyboard] = useState(null);
  const [layoutName, setLayoutName] = useState("default");

  const handleInputChange = (e) => {
    const input = e.target.value;
    setInputText(input);
    keyboard.setInput(input);
    const reversed = input.split("").reverse().join("");
    setReverseText(reversed);
  };

  const onChange = (input) => {
    setInputText(input);
    const reversed = input.split("").reverse().join("");
    setReverseText(reversed);
  };

  const onKeyPress = (button) => {
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const handleShift = () => {
    setLayoutName((prev) => (prev === "default" ? "shift" : "default"));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl md:text-4xl mb-4 text-center">
          Welcome to Reverse Arabic
        </h1>
        <div className="flex">
          <div className="w-1/2 mr-4">
            <textarea
              className="w-full p-2.5 text-right text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter the Text"
              cols={50}
              rows={9}
              value={inputText}
              onChange={handleInputChange}
            />
            <Keyboard
              keyboardRef={(r) => setKeyboard(r)}
              layoutName={layoutName}
              layout={layout.layout}
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
          </div>
          <textarea
            className="w-1/2 p-2.5 text-right text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            cols={50}
            rows={9}
            value={reverseText}
            disabled={true}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
