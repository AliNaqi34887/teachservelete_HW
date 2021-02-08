import React from "react";
import Modal from "./modal";
import style from "./display.css";

function Test({ setFinalInfo, setInfo, info, finalInfo }) {
  function submitHandler(e) {
    e.preventDefault();
    setFinalInfo(info);
  }
  return (
    <div>
      <form>
        <Modal setInfo={setInfo} info={info} id="0" />
        <Modal setInfo={setInfo} info={info} id="1" />
        <Modal setInfo={setInfo} info={info} id="2" />
        <button onClick={submitHandler} className="button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Test;
