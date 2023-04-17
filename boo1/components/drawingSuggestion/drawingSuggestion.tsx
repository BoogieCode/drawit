import React from "react";

const DrawingSuggestion = () => {
  return (
    <div draggable={true}>
      <img
        style={{
          borderRadius: "15px",
          borderColor: "black",
          position: "absolute",
          left: 0,
          right: 20,
          top: 20,
          marginLeft: "auto",
          width: "120px",
        }}
        src="https://picsum.photos/200/300"
      />
    </div>
  );
};

export default DrawingSuggestion;
