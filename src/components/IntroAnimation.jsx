import "../styles/intro-animation.css";
import { useRef, useEffect } from "react";

function IntroAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const circleCount = 15;
    const strokeWidth = 2;
    const circleRad = 5;
    const speed = 0.002; // affects ease timing

    const colors = [
      "#6441b138",
      "#ffe6a0",
      "#fff8e5",
      "#bc5b85",
      "#e84300",
      "#6441b1ff",
      "#232631",
      "#68739c",
      "#1d1f27ff",
    ];
    const lineColor = colors[1];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createRandomPos = () => {
      const targetX =
        Math.random() * (canvas.width - 2 * circleRad) + circleRad;
      const targetY =
        Math.random() * (canvas.height - 2 * circleRad) + circleRad;

      return { x: targetX, y: targetY };
    };

    const selectedColor = () => {
      const colorCount = colors.length - 1;
      const colorIndex = Math.round(Math.random() * colorCount);

      return colors[colorIndex];
    };

    // Circle data: x, y, color, target, progress
    const circles = [];
    const createCircles = () => {
      for (let i = 0; i < circleCount; i++) {
        let connect = Math.round(Math.random() * (circleCount - 1));
        if (connect == i) connect = (i + 1) % circleCount;
        const circle = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          strokeColor: selectedColor(),
          fillColor: selectedColor(),
          cI: connect,
          target: createRandomPos(),
          progress: 0, // 0 → 1 progress toward target
        };
        circles.push(circle);
      }
    };

    const drawCircles = () => {
      ctx.lineWidth = strokeWidth;
      for (const c of circles) {
        ctx.beginPath();
        ctx.fillStyle = c.fillColor;
        ctx.strokeStyle = c.strokeColor;
        ctx.arc(c.x, c.y, circleRad, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
      }
    };

    const connectCircles = () => {
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = strokeWidth;
      for (const c of circles) {
        ctx.beginPath();
        ctx.lineCap = "round";
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(circles[c.cI].x, circles[c.cI].y);
        ctx.stroke();
      }
    };

    const moveCircles = () => {
      for (const c of circles) {
        // Increment progress
        c.progress += speed;
        if (c.progress > 1) c.progress = 1;

        // Ease-in-out function
        const t = c.progress;
        const ease = t * t * (3 - 2 * t); // smoothstep

        // Update position
        c.x += (c.target.x - c.x) * ease;
        c.y += (c.target.y - c.y) * ease;

        // If very close, pick a new target
        if (Math.hypot(c.target.x - c.x, c.target.y - c.y) < 1) {
          c.target = createRandomPos();
          c.progress = 0;
        }
      }
    };

    let animationFrame;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      connectCircles();
      drawCircles();
      moveCircles();

      animationFrame = requestAnimationFrame(animate);
    };

    // Execution
    resize();
    createCircles();
    animate();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} id="intro-animation"></canvas>;
}

export default IntroAnimation;
