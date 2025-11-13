const worker = new Worker(
  new URL("./introAnimation.worker.js", import.meta.url),
  { type: "module" }
);

export default worker;
