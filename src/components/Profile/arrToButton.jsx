import React from "react";

function ArrayToButton({ array, img }) {
  function handleButtonClick(index) {
    alert(index);
  }

  function makeButton(array) {
    return array.map((index) => (
      <button key={index} onClick={() => handleButtonClick(index)}>
        {index}
      </button>
    ));
  }

  return <div>{makeButton(array)}</div>;
}

export default ArrayToButton;
