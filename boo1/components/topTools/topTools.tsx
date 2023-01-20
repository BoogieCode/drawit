import React, { Dispatch, FC, SetStateAction, useState } from "react";
import styles from "./topTools.module.css";
import { FaPen } from "react-icons/fa";

type Props = {
  drawingColor: string;
  setDrawingColor: Dispatch<SetStateAction<string>>;
  setIsErasing: Dispatch<SetStateAction<boolean>>;
};

const TopTools: FC<Props> = ({
  drawingColor,
  setDrawingColor,
  setIsErasing,
}) => {
  const [colorPicker, isColorPicker] = useState<boolean>(false);
  const defaultColors = ["#eb4034", "#ebe234", "#4ceb34", "#4334eb"];
  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
        }}
      >
        <button
          onClick={() => isColorPicker(!colorPicker)}
          className={styles.colorPickerButton}
          style={{ backgroundColor: `${drawingColor}` }}
        />
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: 15,
          }}
        >
          <FaPen />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: 15,
          }}
        >
          <FaPen />
        </div>
      </div>
      <div style={{ display: `${colorPicker === true ? "grid" : "none"}` }}>
        {defaultColors.map((color) => (
          <button
            key={color}
            onClick={() => {
              setDrawingColor(color);
              isColorPicker(false);
            }}
            className={styles.colorPickerButton}
            style={{ marginTop: "10px", backgroundColor: `${color}` }}
          />
        ))}
      </div>
    </div>
  );
};

export default TopTools;
