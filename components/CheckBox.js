import React, { useState } from "react";

function CheckBoxItem({ text }) {
  const [isComplete, setIsComplete] = useState(false);

  const handleClick = () => {
    setIsComplete(!isComplete);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          width: "20px",
          height: "20px",
          marginRight: "10px",
          border: "1px solid black",
          backgroundColor: isComplete ? "green" : "white",
        }}
        onClick={handleClick}
      ></div>
      <div style={{ textDecoration: isComplete ? "line-through" : "none" }}>
        {text}
      </div>
    </div>
  );
}

export default CheckBoxItem;
