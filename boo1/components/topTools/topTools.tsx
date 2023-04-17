import React, {
  Dispatch,
  FC,
  MutableRefObject,
  SetStateAction,
  useState,
} from "react";
import styles from "./topTools.module.css";
import { FaEraser, FaPen } from "react-icons/fa";
import Share from "../share/share";
import Slider from "../slider/slider";
import { ReactSketchCanvasRef } from "react-sketch-canvas";

type Props = {
  drawingColor: string;
  setDrawingColor: Dispatch<SetStateAction<string>>;
  setIsErasing: Dispatch<SetStateAction<boolean>>;
  strokeWidth: number;
  setStrokeWidth: Dispatch<SetStateAction<number>>;
  isErasing: boolean;
  reactSketchCanvasRef: MutableRefObject<ReactSketchCanvasRef | undefined>;
};

const TopTools: FC<Props> = ({
  drawingColor,
  setDrawingColor,
  setIsErasing,
  isErasing,
  strokeWidth,
  setStrokeWidth,
  reactSketchCanvasRef,
}) => {
  const [colorPicker, isColorPicker] = useState<boolean>(false);
  const defaultColors = ["#eb4034", "#ebe234", "#4ceb34", "#4334eb"];

  const handleClick = async () => {
    try {
      const imageData = await reactSketchCanvasRef?.current!.exportImage(
        "jpeg"
      );
      const blob = await fetch(imageData).then((res) => res.blob());
      const filesArray = [
        new File([blob], "image.jpg", { type: "image/jpeg" }),
      ];
      const shareData = {
        files: filesArray,
      };
      navigator.share(shareData);
    } catch (err) {
      console.error("Error sharing image:", err);
    }
  };

  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
        }}
      >
        <button
          onClick={() => {
            isColorPicker(!colorPicker);
            setIsErasing(false);
          }}
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
          <div style={{ position: "absolute" }}>
            <Slider strokeWidth={strokeWidth} setStrokeWidth={setStrokeWidth} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: 15,
          }}
        >
          <FaEraser
            color={isErasing === true ? "black" : "gray"}
            onClick={() => {
              setIsErasing(!isErasing);
              isColorPicker(false);
            }}
          />
        </div>
      </div>
      <div>
        <button onClick={handleClick}>Share image</button>
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
