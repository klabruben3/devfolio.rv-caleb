import "../../styles/effects/intro-animation.css";
import { useRef, useEffect } from "react";
import worker from "../../workers/introWorkerInstance";

function IntroAnimation() {
  const canvasRef = useRef(null);
  const is_mounted = useRef(false);
  const offscreen = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!is_mounted.current) {
      offscreen.current = canvas.transferControlToOffscreen();
      worker.postMessage(
        {
          canvas: offscreen.current,
          w: canvas.offsetWidth,
          h: canvas.offsetHeight,
          commit: "init",
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          worker.postMessage({ commit: "continue", src: "introAnimation" });
        } else {
          worker.postMessage({ commit: "pause", src: "introAnimation" });
        }
      },
      {
        root: document.getElementById("root"),
        threshold: 0,
      }
    );

    observer.observe(canvas);
    window.addEventListener("resize", handleResize);

    return () => {
      observer.unobserve(canvas);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} id="intro-animation" />;
}

export default IntroAnimation;
