import { useRef } from "react";
import { useEffect } from "react";
import "../styles/card.css";

function Card() {
  const canvasRef = useRef(null);
  const cardRef = useRef(null);
  const strokeWidth = 2;
  let offset = 0;
  const x = strokeWidth / 2,
    y = strokeWidth / 2,
    w = 200,
    h = 150,
    r = 15 - strokeWidth / 2;

  function draw(ctx, canvas) {
    // Create gradient for stroke
    const gradient = ctx.createLinearGradient(
      x,
      y,
      w + strokeWidth / 2,
      h + strokeWidth / 2
    );
    gradient.addColorStop(0, "#232631");
    gradient.addColorStop(0.2, "#232631");
    gradient.addColorStop(0.3, "#ffffffff");
    gradient.addColorStop(0.4, "#e84300");
    gradient.addColorStop(0.6, "#232631");
    gradient.addColorStop(0.8, "#232631");
    gradient.addColorStop(1, "#232631");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.strokeStyle = gradient;
    ctx.lineWidth = strokeWidth;
    ctx.setLineDash([60, 290]);
    ctx.lineDashOffset = -offset;
    ctx.shadowColor = gradient;
    ctx.shadowBlur = 10;
    ctx.lineCap = "round";
    ctx.roundRect(x, y, w - strokeWidth, h - strokeWidth, r);
    ctx.stroke();

    if (offset >= 2 * (w + h)) offset = 0;
    offset += 1;

    requestAnimationFrame(() => draw(ctx, canvas));
  }

  function resize(ctx, canvas) {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    draw(ctx, canvas);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    window.addEventListener("resize", () => resize(ctx, canvas));
    resize(ctx, canvas);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      <div ref={cardRef} className="card">
        <canvas ref={canvasRef} id="glow-edge"></canvas>
      </div>
    </>
  );
}

export default Card;
