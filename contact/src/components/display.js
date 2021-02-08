import React from "react";
import style from "./display.css";

function Display({ item }) {
  const boxes = [];
  for (let i = 0; i < item.numberOfBoxes; i++) {
    let colour = item.colourOfBoxes;
    console.log(colour);
    boxes.push(<div className={"hello " + colour}>box</div>);
  }
  return <div className="secondaryBox">{boxes}</div>;
}
export default Display;
