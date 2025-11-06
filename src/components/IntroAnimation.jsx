import "../styles/intro-animation.css";
import { useRef, useEffect } from "react";

function IntroAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const offscreen = canvas.transferControlToOffscreen();
    const worker = new Worker(
      new URL("../workers/introAnimation.worker.js", import.meta.url),
      { type: "module" }
    );

    worker.postMessage(
      {
        canvas: offscreen,
        w: canvas.offsetWidth,
        h: canvas.offsetHeight,
        commit: "init",
      },
      [offscreen]
    );

    const handleResize = () =>
      worker.postMessage({
        w: canvas.offsetWidth,
        h: canvas.offsetHeight,
        commit: "resize",
      });
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} id="intro-animation" />;
}

export default IntroAnimation;
