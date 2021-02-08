import React, { useState } from "react";
import { Button, PageHeader } from "antd";
import "./App.css";
import Test from "./components/test";
import Display from "./components/display";
import react from "react";

function App() {
  const [info, setInfo] = useState([
    { id: 0, colourOfBoxes: "red", numberOfBoxes: 0 },
    { id: 1, colourOfBoxes: "red", numberOfBoxes: 0 },
    { id: 2, colourOfBoxes: "red", numberOfBoxes: 0 },
  ]);
  const [finalInfo, setFinalInfo] = useState([
    { id: 0, colourOfBoxes: "", numberOfBoxes: 0 },
    { id: 1, colourOfBoxes: "", numberOfBoxes: 0 },
    { id: 2, colourOfBoxes: "", numberOfBoxes: 0 },
  ]);
  return (
    <>
      <div>
        <Test
          setFinalInfo={setFinalInfo}
          setInfo={setInfo}
          info={info}
          finalInfo={finalInfo}
        />
      </div>
      <ul>
        {finalInfo.map((item, index) => {
          return <Display key={index} item={item} />;
        })}
      </ul>
    </>
  );
}

export default App;
