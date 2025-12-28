import { useRef, useEffect } from "react";
import worker from "../workers/introWorkerInstance";

function IntroAnimation() {
  const canvasRef = useRef(null);
  const is_mounted = useRef(false);
  const offscreen = useRef();
  const count = useRef();

  useEffect(() => {
    // Checks for how many circles should be on the screen
    if (window.innerWidth >= 1000) count.current = 25;
    else if (window.innerWidth < 1000 && window.innerWidth >= 600)
      count.current = 15;
    else if (window.innerWidth < 600) count.current = 10;
    //

    const canvas = canvasRef.current;
    if (!is_mounted.current) {
      offscreen.current = canvas.transferControlToOffscreen();

      worker.postMessage(
        {
          canvas: offscreen.current,
          w: canvas.offsetWidth,
          h: canvas.offsetHeight,
          commit: "init",
          c: count.current,
        },
        [offscreen.current]
      );

      is_mounted.current = offscreen.current instanceof OffscreenCanvas;
    }

    const handleResize = () =>
      worker.postMessage({
        w: canvas.offsetWidth,
        h: canvas.offsetHeight,
        commit: "resize",
      });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
    />
  );
}

export default IntroAnimation;
