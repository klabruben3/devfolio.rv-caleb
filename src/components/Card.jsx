import { useRef } from "react";
import { useEffect } from "react";

function Card() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const canvasResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", canvasResize);

    return () => {
      window.removeEventListener("resize", canvasResize);
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

export default Card;
