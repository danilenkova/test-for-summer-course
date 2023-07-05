import "./App.css";
import { React, useState } from "react";

function App() {
  const [str, setStr] = useState("");
  const [uniqLetter, setUniqLetter] = useState("");
  function getUuniqLetter(enteredStr) {
    const arrFromStr = str.split(" ") || str.split(",");
    const newAr = [];
    const firstUniqueLetter = (str) =>
      [...str].find((n, i, a) => a.indexOf(n) === a.lastIndexOf(n)) || "";
    arrFromStr.forEach((world) => {
      const uniq = firstUniqueLetter(world);
      newAr.push(uniq);
    });
    const uniqueLetter = firstUniqueLetter(newAr);
    setUniqLetter(uniqueLetter);
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    getUuniqLetter(str);
    setStr("");
  };

  return (
    <div className="App">
      <div className="App-box">
        <form className="App-form" onSubmit={handelSubmit}>
          <p>Find a unique symbol in the text</p>
          <textarea
            type="text"
            className="App-textarea"
            placeholder="Enter any text"
            value={str}
            onChange={(e) => setStr(e.target.value)}
          ></textarea>
          <button className="App-button">Find</button>
        </form>
        <p className="App-answer">
          Unique symbol: {uniqLetter ? uniqLetter : " "}
        </p>
      </div>
    </div>
  );
}

export default App;
