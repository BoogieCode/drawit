import React, { Dispatch, FC, SetStateAction, useRef, useState } from "react";
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import DrawingSuggestion from "../drawingSuggestion/drawingSuggestion";
import TopTools from "../topTools/topTools";

const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem",

  width: "100vw",
  height: "100vh",
};

type Props = {
  isErasing: boolean;
  drawingColor: string;
  strokeWidth: number;
  setDrawingColor: Dispatch<SetStateAction<string>>;
  setIsErasing: Dispatch<SetStateAction<boolean>>;
};

const Canvas: FC<Props> = ({
  isErasing,
  drawingColor,
  strokeWidth,
  setDrawingColor,
  setIsErasing,
}) => {
  const reactSketchCanvasRef = useRef<ReactSketchCanvasRef>();
  reactSketchCanvasRef.current?.eraseMode(isErasing);

  return (
    <div>
      <TopTools
        setDrawingColor={setDrawingColor}
        setIsErasing={setIsErasing}
        drawingColor={drawingColor}
      />
      <DrawingSuggestion />
      <div>
        <ReactSketchCanvas
          strokeColor={drawingColor}
          style={styles}
          strokeWidth={strokeWidth}
          ref={reactSketchCanvasRef as any}
        />
      </div>
    </div>
  );
};

export default Canvas;
