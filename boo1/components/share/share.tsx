import React, { FC, MutableRefObject } from "react";
import { ReactSketchCanvasRef } from "react-sketch-canvas";

type Props = {
  reactSketchCanvasRef: MutableRefObject<ReactSketchCanvasRef | undefined>;
};

const Share: FC<Props> = ({ reactSketchCanvasRef }) => {
  const handleClick = async () => {
    console.log("image");

    const canvas = reactSketchCanvasRef.current;
    const image = canvas && (await canvas.exportImage("jpeg"));
    console.log(image);
    try {
      await navigator.share({
        title: "My canvas",
        text: "Check out my canvas on Instagram!",
        url: image,
      });
    } catch (err) {
      console.log("Error sharing:", err);
    }
  };

  return (
    <div>
      <button onClick={() => console.log("image")}>Share on Instagram</button>
    </div>
  );
};

export default Share;
