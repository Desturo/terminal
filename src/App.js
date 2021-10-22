import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import ContentEditable from "react-contenteditable";
import crypto from "crypto";

function App() {
  const [lines, setLines] = useState([]);

  const currentText = useRef("");

  const [curretDirectory, setCurretDirectory] = useState([
    "A",
    "Desturo",
    "website",
  ]);

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
      setLines([...lines, { path: newPath, text: currentText }]);
    }
  };

  return (
    <div>
      <p>Welcome to the Terminal</p>
      {lines.map((line) => (
        <div className="line" key={crypto.randomBytes(16).toString("hex")}>
          <span>{line.path}</span>
          <span className="inputLine" autoComplete="off">
            {line.text}
          </span>
        </div>
      ))}

      <div className="line">
        <span>
          {curretDirectory.map((dir, index) =>
            index !== 0 ? `/${dir}` : `${dir}:`
          )}
          &gt;
        </span>
        <ContentEditable
          className="inputLine"
          html={""}
          onKeyDown={checkForEnter}
          onChange={async (e) => {
            if (e.target.innerText !== undefined) {
              currentText.current(e.target.value);
            }
          }}
        />
      </div>
    </div>
  );
}

export default App;
