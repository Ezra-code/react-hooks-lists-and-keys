import React from "react";


function ColorItem(props) { 
  return <li style={{ color: props.color }}>{props.color}</li>
}

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
    "orange",
    "blue",
  ];

//   const colorElements = colors.map((color) => {
//     return <li key={color} style={{ color: color }}>{color}</li>
//   });
  
 const colorElements = colors.map((color) => { 
    return <ColorItem key={ color} color={color} />;
 })
  
  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorElements}
      </ol>
    </div>
  );
  
 
 }

export default ColorList;
