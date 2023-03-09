import React from "react";
import ReactDOM from "react-dom";
import ArrayBox from "./Components/ArrayBox";

function App() {
  return (
    <>
      <ArrayBox />
    </>
  );
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
