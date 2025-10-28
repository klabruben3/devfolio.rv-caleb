import "../styles/intro-animation.css";
import { useRef, useEffect } from "react";

function IntroAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Shapes properties
    const circleCount = 10;
    const strokeWidth = 2;
    const circleRad = 5;
    const speed = 0.02;

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

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createRandomPos = () => {
      const targetX = Math.random() * (canvas.width - circleRad) + circleRad;
      const targetY = Math.random() * (canvas.height - circleRad) + circleRad;

      return { x: targetX, y: targetY };
    };

    const selectedColor = () => {
      const colorCount = colors.length - 1;
      const colorIndex = Math.round(Math.random() * colorCount);

      return colors[colorIndex];
    };

    const circles = [];
    const createCircles = () => {
      for (let i = 0; i < circleCount; i++) {
        const randomPos = createRandomPos();
        const connect = Math.round(Math.random() * (circleCount - 1)); // Index of the circle to connect to
        const circle = {
          x: randomPos.x,
          y: randomPos.y,
          strokeColor: selectedColor(),
          fillColor: selectedColor(),
          cI: connect,
        };

        circles.push(circle);
      }
    };

    const drawCircles = () => {
      ctx.lineWidth = strokeWidth;

      for (const circle of circles) {
        ctx.beginPath();
        ctx.fillStyle = circle.fillColor;
        ctx.strokeStyle = circle.strokeColor;
        ctx.arc(circle.x, circle.y, circleRad, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.stroke();
      }
    };

    const connectCircles = () => {
      ctx.strokeStyle = "red";
      for (const circle of circles) {
        ctx.beginPath();
        ctx.lineWidth = strokeWidth;
        ctx.lineCap = "round";
        ctx.moveTo(circle.x, circle.y);
        ctx.lineTo(circles[circle.cI].x, circles[circle.cI].y);
        ctx.stroke();
      }
    };

    const createRandomTar = () => {
      const randomTar = [];
      for (const circle of circles) randomTar.push(createRandomPos());

      return randomTar;
    };

    const moveCircle = (targets) => {
      for (let i = 0; i < circleCount; i++) {
        const dx = targets[i].x - circles[i].x;
        const dy = targets[i].y - circles[i].y;

        circles[i].x += dx * speed;
        circles[i].y += dy * speed;
      }
    };

    let targets;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      connectCircles();
      drawCircles();
      moveCircle(targets);

      // Recalcultaes the random targets for which ever circle closest to its target
      for (let i = 0; i < circleCount; i++) {
        const dx = targets[i].x - circles[i].x;
        const dy = targets[i].y - circles[i].y;

        if (Math.hypot(dx, dy) < 20) targets[i] = createRandomPos();
      }

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resize();
      drawCircles();
      connectCircles();
    };

    // Execution
    resize();
    createCircles();
    targets = createRandomTar();
    animate();

    window.addEventListener("resize", handleResize);

    // Clean-Up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} id="intro-animation"></canvas>;
}

export default IntroAnimation;
