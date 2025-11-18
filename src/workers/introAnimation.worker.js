const speed = 0.00008;
const strokeWidth = 1;
const circleRad = 3;
const opacT = 0.0005;
let opacity = 0;

const canvasRef = { canvas: null };
const ctxRef = { ctx: null };

const createRandomPos = () => ({
  x: Math.random() * (canvasRef.canvas.width - 2 * circleRad) + circleRad,
  y: Math.random() * (canvasRef.canvas.height - 2 * circleRad) + circleRad,
});

let circleCount;
const circles = [];
const createCircles = () => {
  for (let i = 0; i < circleCount; i++) {
    const initRandPos = createRandomPos();
    circles.push({
      x: initRandPos.x,
      y: initRandPos.y,
      target: createRandomPos(),
      progress: 0,
    });
  }
};

const connectCircles = () => {
  const ctx = ctxRef.ctx;
  ctx.strokeStyle = `rgba(0, 186, 255, ${Math.min(opacity, 0.1)})`;
  ctx.lineWidth = strokeWidth;
  ctx.beginPath();
  ctx.lineCap = "round";
  for (const c of circles) {
    ctx.moveTo(c.x, c.y);

    for (const connectC of circles) {
      const dx = connectC.x - c.x;
      const dy = connectC.y - c.y;

      if (Math.hypot(dx, dy) < 100) {
        ctx.lineTo(connectC.x, connectC.y);
      }
    }
  }
  ctx.stroke();
};

const drawCircles = () => {
  const ctx = ctxRef.ctx;
  ctx.fillStyle = `rgba(255, 69, 0, ${opacity})`;
  for (const c of circles) {
    ctx.beginPath();
    ctx.arc(c.x, c.y, circleRad, 0, 2 * Math.PI);
    ctx.fill();
  }
};

const moveCircles = () => {
  for (const c of circles) {
    c.progress += speed;
    if (c.progress > 1) c.progress = 1;

    const t = c.progress;
    const ease = t ** 2 * (3 - 2 * t);

    // Alternating ease
    c.x += (c.target.x - c.x) * ease;
    c.y += (c.target.y - c.y) * ease;

    // Linear
    c.x += (c.target.x - c.x) * speed;
    c.y += (c.target.y - c.y) * speed;

    if (Math.hypot(c.target.x - c.x, c.target.y - c.y) < 1) {
      c.target = createRandomPos();
      c.progress = 0;
    }
  }
};

let animationFrame;

const animate = () => {
  ctxRef.ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
  ctxRef.ctx.fillRect(0, 0, canvasRef.canvas.width, canvasRef.canvas.height);
  connectCircles();
  drawCircles();
  moveCircles();

  opacity += opacity < 0.3 ? opacT : 0;

  animationFrame = requestAnimationFrame(animate);
};

let is_animate;
let is_intersecting;

onmessage = (e) => {
  const { commit, src, canvas, w, h, c } = e.data;
  switch (commit) {
    case "init":
      canvasRef.canvas = canvas;
      ctxRef.ctx = canvas.getContext("2d");
      canvas.width = w;
      canvas.height = h;
      circleCount = c;
      createCircles();
      animationFrame = requestAnimationFrame(animate);
      is_animate = true;
      is_intersecting = false;
      break;

    // case "pause":
    //   cancelAnimationFrame(animationFrame);
    //   if (src === "introAnimation") is_intersecting = true;
    //   is_animate = false;
    //   if (src === "introAnimation") break;
    //   setTimeout(() => {
    //     postMessage(true);
    //   }, 250);
    //   break;

    // case "continue":
    //   const delay = src === "introAnimation" ? 0 : 250;
    //   if (src === "introAnimation") is_intersecting = false;
    //   if (!is_animate && !is_intersecting) {
    //     setTimeout(() => {
    //       animationFrame = requestAnimationFrame(animate);
    //       is_animate = true;
    //     }, delay);
    //   }
    //   if (src === "introAnimation") break;
    //   postMessage(false);

    //   break;

    case "resize":
      canvasRef.canvas.width = w;
      canvasRef.canvas.height = h;
      break;
  }
};
