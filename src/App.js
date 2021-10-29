import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import ContentEditable from "react-contenteditable";
import crypto from "crypto";
import { commandArray } from "./logic/statics/commands";
import { createOutput } from "./logic/commands/commandResponse";

function App() {

  const [lines, setLines] = useState([]);

  const currentText = useRef("");

  const [curretDirectory, setCurretDirectory] = useState([
    "A",
    "Desturo",
    "website",
  ]);

  const checkInput = (inputArray) => {
    while (inputArray.indexOf('') !== -1) {
      inputArray.splice(inputArray.indexOf(''), 1);
    }
    if (commandArray.indexOf(inputArray[0]) !== -1) {
      const command = commandArray[commandArray.indexOf(inputArray[0])];
      return createOutput(command, inputArray, setCurretDirectory, curretDirectory);
    } else {
      return { path: "nonexist", text: "Command: \"" + inputArray[0] + "\" not recognized" }
    }
  };

  const checkForEnter = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let newPath = "";
      curretDirectory.map((item, index) => {
        if (index !== 0) {
          newPath = newPath + `/${item}`;
        } else {
          newPath = newPath + `${item}:`;
        }
      });
      newPath += ">";
      let newText = currentText.current.replace(new RegExp("&nbsp;", "g"), " ");
      setLines([...lines, { path: newPath, text: newText }, checkInput(newText.split(" "))]);
      currentText.current = "";
        
    }
  };
  return (
    <div>
      <p>Welcome to the Terminal</p>
      {lines.map((line) =>
        line.text !== 'nonexist' && (line.path !== "nonexist" ? (
          <div className="line" key={crypto.randomBytes(16).toString("hex")}>
            <span>{line.path}</span>
            <span className="inputLine" autoComplete="off">
              {line.text}
            </span>
          </div>
        ) : (
          <div className="outputLine" key={crypto.randomBytes(16).toString("hex")}>
            {line.text.split('\n').map(str => <span className="inputLine" key={crypto.randomBytes(16).toString("hex")} autoComplete="off">
              {str}
              </span>)}
        </div>
        ))
        
      )}

      <div className="line">
        <span>
          {curretDirectory.map((dir, index) =>
            index !== 0 ? `/${dir}` : `${dir}:`
          )}
          &gt;
        </span>
        <ContentEditable
          className="inputLine"
          html={currentText.current}
          onKeyDown={checkForEnter}
          onChange={(e) => {
            currentText.current = e.target.value;
          }}
        /> 
      </div>
    </div>
  );
}

export default App;
