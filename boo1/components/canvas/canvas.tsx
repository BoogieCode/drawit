import React, {
  Dispatch,
  FC,
  MutableRefObject,
  SetStateAction,
  useRef,
  useState,
} from "react";
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
  reactSketchCanvasRef: MutableRefObject<ReactSketchCanvasRef | undefined>;
  isErasing: boolean;
  drawingColor: string;
  strokeWidth: number;
  setDrawingColor: Dispatch<SetStateAction<string>>;
  setIsErasing: Dispatch<SetStateAction<boolean>>;
  setStrokeWidth: Dispatch<SetStateAction<number>>;
};

const Canvas: FC<Props> = ({
  reactSketchCanvasRef,
  isErasing,
  drawingColor,
  strokeWidth,
  setStrokeWidth,
  setDrawingColor,
  setIsErasing,
}) => {
  reactSketchCanvasRef.current?.eraseMode(isErasing);

  return (
    <div>
      <TopTools
        setDrawingColor={setDrawingColor}
        setIsErasing={setIsErasing}
        isErasing={isErasing}
        drawingColor={drawingColor}
        strokeWidth={strokeWidth}
        setStrokeWidth={setStrokeWidth}
        reactSketchCanvasRef={reactSketchCanvasRef}
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
