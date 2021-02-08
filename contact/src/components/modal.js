import React from "react";

function Modal({ info, setInfo, id }) {
  function changeNumberHandler(e) {
    let info1 = info.map((information) => {
      if (information.id == id) {
        information.numberOfBoxes = e.target.value;
      }
      return information;
    });
    setInfo(info1);
  }
  function changeColourHandler(e) {
    let info1 = info.map((information) => {
      if (information.id == id) {
        information.colourOfBoxes = e.target.value;
      }
      return information;
    });
    setInfo(info1);
  }
  return (
    <div>
      <label htmlFor="1">Enter the number of boxes : </label>
      <input
        id="1"
        type="number"
        max="5"
        value={info[id].numberOfBoxes}
        onChange={changeNumberHandler}
      ></input>
      <label htmlFor="2">Enter the colour of boxes : </label>
      <select value={info[id].colourOfBoxes} onChange={changeColourHandler}>
        <option>red</option>
        <option>green</option>
        <option>blue</option>
      </select>
    </div>
  );
}
export default Modal;
