import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
   const [childrenColor, setChildrenColor] = useState("#FFF");

   function handleChangeColor(newChildColor) {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor); // update color state to a new value
    
    setChildrenColor(newChildColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child childrenColor={childrenColor} onChangeColor={handleChangeColor}/>
      <Child childrenColor={childrenColor} onChangeColor={handleChangeColor}/>
    </div>
  );
}

export default Parent;
