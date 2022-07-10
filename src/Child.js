import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, childrenColor }) {
  // console.log(onChangeColor);
function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }
  
  return <div  onClick={handleClick}
  className="child" 
  style={{ backgroundColor: childrenColor }} />;
}

export default Child;
