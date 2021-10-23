import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import ContentEditable from "react-contenteditable";
import crypto from "crypto";
import { commandArray } from "./logic/statics/commands";

function App() {
  const NONEXIST = "nonexist";

  const [lines, setLines] = useState([]);

  const currentText = useRef("");

  const [curretDirectory, setCurretDirectory] = useState([
    "A",
    "Desturo",
    "website",
  ]);

  const checkInput = (inputArray) => {
    if (commandArray.indexOf(inputArray[0]) !== -1) {
      let command = commandArray[commandArray.indexOf(inputArray[0])];
      setLines([
        ...lines,
        { path: "nonexist", text: "Command: " + command + " recognized" },
      ]);
    } else {
      setLines([
        ...lines,
        {
          path: "nonexist",
          text: "Command: " + inputArray[0] + " not recognized",
        },
      ]);
    }
  };

  const checkForEnter = (e) => {
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
      checkInput(newText.split(" "));
      setLines([...lines, { path: newPath, text: newText }]);
      currentText.current = "";
    }
  };

  return (
    <div>
      <p>Welcome to the Terminal</p>
      {lines.map((line) =>
        line.path !== "nonexist" ? (
          <div className="line" key={crypto.randomBytes(16).toString("hex")}>
            <span>{line.path}</span>
            <span className="inputLine" autoComplete="off">
              {line.text}
            </span>
          </div>
        ) : (
          <span key={crypto.randomBytes(16).toString("hex")}>Log here</span>
        )
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
