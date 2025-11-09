const circleCount = 15;
const speed = 0.003;
const strokeWidth = 2;
const circleRad = 5;
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

const selectedColor = () => colors[Math.floor(Math.random() * colors.length)];

const canvasRef = { canvas: null };
const ctxRef = { ctx: null };

const createRandomPos = () => ({
  x: Math.random() * (canvasRef.canvas.width - 2 * circleRad) + circleRad,
  y: Math.random() * (canvasRef.canvas.height - 2 * circleRad) + circleRad,
});

const circles = [];
const createCircles = () => {
  for (let i = 0; i < circleCount; i++) {
    let connect = Math.floor(Math.random() * circleCount);
    const initRandPos = createRandomPos();
    if (connect === i) connect = (i + 1) % circleCount;
    circles.push({
      x: initRandPos.x,
      y: initRandPos.y,
      strokeColor: selectedColor(),
      fillColor: selectedColor(),
      cI: connect,
      target: createRandomPos(),
      progress: 0,
    });
  }
};

const connectCircles = () => {
  const ctx = ctxRef.ctx;
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

const drawCircles = () => {
  const ctx = ctxRef.ctx;
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

const moveCircles = () => {
  for (const c of circles) {
    c.progress += speed;
    if (c.progress > 1) c.progress = 1;

    const t = c.progress;
    const ease = t ** 2 * (3 - 2 * t);

    c.x += (c.target.x - c.x) * ease;
    c.y += (c.target.y - c.y) * ease;

    if (Math.hypot(c.target.x - c.x, c.target.y - c.y) < 1) {
      c.target = createRandomPos();
      c.progress = 0;
    }
  }
};

const animate = () => {
  ctxRef.ctx.clearRect(0, 0, canvasRef.canvas.width, canvasRef.canvas.height);
  connectCircles();
  drawCircles();
  moveCircles();

  requestAnimationFrame(animate);
};

onmessage = (e) => {
  if (e.data.commit === "init") {
    canvasRef.canvas = e.data.canvas;
    ctxRef.ctx = canvasRef.canvas.getContext("2d");
    canvasRef.canvas.width = e.data.w;
    canvasRef.canvas.height = e.data.h;

    // resize();
    createCircles();
    animate();
  } else if (e.data.commit === "resize") {
    canvasRef.canvas.width = e.data.w;
    canvasRef.canvas.height = e.data.h;
  }
};
