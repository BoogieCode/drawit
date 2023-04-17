import React, { Dispatch, FC, SetStateAction } from "react";

type Props = {
  strokeWidth: number;
  setStrokeWidth: Dispatch<SetStateAction<number>>;
};
const styles = {
  container: {},
  slider: {
    webkitAppearance: "none",
    width: "100%",
    height: "100%",
    margin: 0,
    background: "linear-gradient(to bottom, #f44336, #3f51b5)",
    borderRadius: "5px",
    transform: "rotate(270deg)",
  },
};
const Slider: FC<Props> = ({ strokeWidth, setStrokeWidth }) => {
  return (
    <div style={styles.container}>
      <input
        className="slider"
        type="range"
        min="1"
        max="30"
        step="0.1"
        style={styles.slider}
        value={strokeWidth}
        onChange={(e) => {
          console.log(e.target.value);
          setStrokeWidth(e.target.value as unknown as number);
        }}
      />
    </div>
  );
};

export default Slider;
