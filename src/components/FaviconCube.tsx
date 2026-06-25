"use client";

import { useEffect } from "react";

const SIZE = 64;
const SCALE = (SIZE / 2 - 8) / Math.sqrt(3);
const STROKE = "#888888";

const VERTICES: [number, number, number][] = [
  [-1, -1, -1],
  [1, -1, -1],
  [1, 1, -1],
  [-1, 1, -1],
  [-1, -1, 1],
  [1, -1, 1],
  [1, 1, 1],
  [-1, 1, 1],
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 4],
  [0, 4],
  [1, 5],
  [2, 6],
  [3, 7],
];

function rotate(
  [x, y, z]: [number, number, number],
  angleX: number,
  angleY: number,
  angleZ: number
): [number, number, number] {
  let x1 = x * Math.cos(angleZ) - y * Math.sin(angleZ);
  let y1 = x * Math.sin(angleZ) + y * Math.cos(angleZ);
  let z1 = z;

  const y2 = y1 * Math.cos(angleX) - z1 * Math.sin(angleX);
  const z2 = y1 * Math.sin(angleX) + z1 * Math.cos(angleX);
  const x2 = x1 * Math.cos(angleY) + z2 * Math.sin(angleY);
  const z3 = -x1 * Math.sin(angleY) + z2 * Math.cos(angleY);

  return [x2, y2, z3];
}

function drawFrame(
  ctx: CanvasRenderingContext2D,
  angleX: number,
  angleY: number,
  angleZ: number
) {
  const projected = VERTICES.map((v) => {
    const [x, y] = rotate(v, angleX, angleY, angleZ);
    return [SIZE / 2 + x * SCALE, SIZE / 2 + y * SCALE] as [number, number];
  });

  ctx.clearRect(0, 0, SIZE, SIZE);
  ctx.strokeStyle = STROKE;
  ctx.lineWidth = 2;
  ctx.lineCap = "square";
  ctx.lineJoin = "miter";

  for (const [a, b] of EDGES) {
    const [x1, y1] = projected[a];
    const [x2, y2] = projected[b];
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
}

export default function FaviconCube() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = SIZE;
    canvas.height = SIZE;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    document
      .querySelectorAll("link[rel*='icon']")
      .forEach((node) => node.remove());

    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    document.head.appendChild(link);

    let angleX = 0.55;
    let angleY = 0.75;
    let angleZ = 0.35;
    let frameId = 0;
    let lastUpdate = 0;

    const update = (time: number) => {
      angleX += 0.014;
      angleY += 0.018;
      angleZ += 0.011;

      if (time - lastUpdate >= 55) {
        lastUpdate = time;
        drawFrame(ctx, angleX, angleY, angleZ);
        link.href = canvas.toDataURL("image/png");
      }

      frameId = requestAnimationFrame(update);
    };

    drawFrame(ctx, angleX, angleY, angleZ);
    link.href = canvas.toDataURL("image/png");
    frameId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return null;
}
