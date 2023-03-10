import Head from "next/head";
import { useState } from "react";
import Canvas from "../components/canvas/canvas";
import ColorPicker from "../components/colorPicker/colorPicker";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [isToolPanelOpen, setIsToolPanelOpen] = useState<boolean>(false);
  const [isErasing, setIsErasing] = useState<boolean>(false);
  const [drawingColor, setDrawingColor] = useState<string>("#000000");
  const [strokeWidth, setStrokeWidth] = useState<number>(4);

  return (
    <div className={styles.container}>
      <Head>
        <title>Draw it</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} style={{ padding: 0 }}>
        <Canvas
          isErasing={isErasing}
          drawingColor={drawingColor}
          strokeWidth={strokeWidth}
          setDrawingColor={setDrawingColor}
          setIsErasing={setIsErasing}
        />
      </main>
      <button
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          textAlign: "center",
        }}
        onClick={() => {
          const scrollDirection = isToolPanelOpen ? -1 : 1;
          setIsToolPanelOpen(!isToolPanelOpen);
          window.scrollTo(0, document.body.scrollHeight * scrollDirection);
        }}
      >
        {isToolPanelOpen ? "Hide toolpanel" : "Show toolpane!"}
      </button>
      <button onClick={() => setIsErasing(!isErasing)}>
        <img
          width="15px"
          src="https://cdn-icons-png.flaticon.com/512/4043/4043845.png"
        ></img>
      </button>
      <ColorPicker
        setDrawingColor={setDrawingColor}
        setIsToolPanelOpen={setIsToolPanelOpen}
        setIsErasing={setIsErasing}
      />
      <footer className={styles.footer}></footer>
    </div>
  );
}
