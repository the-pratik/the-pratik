"use client";
import { cn } from "../../utils/cn";
import React, { useEffect, useMemo, useRef } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const noise = useMemo(() => createNoise3D(), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return;
    }

    let width = 0;
    let height = 0;
    let time = 0;
    let animationId = 0;
    const waveColors = colors ?? [
      "#38bdf8",
      "#818cf8",
      "#c084fc",
      "#e879f9",
      "#22d3ee",
    ];
    const speedIncrement = speed === "fast" ? 0.002 : 0.001;

    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      context.filter = `blur(${blur}px)`;
    };

    const render = () => {
      context.fillStyle = backgroundFill || "#050505";
      context.globalAlpha = waveOpacity || 0.5;
      context.fillRect(0, 0, width, height);
      time += speedIncrement;

      for (let wave = 0; wave < 5; wave++) {
        context.beginPath();
        context.lineWidth = waveWidth || 50;
        context.strokeStyle = waveColors[wave % waveColors.length];

        for (let x = 0; x < width; x += 5) {
          const y = noise(x / 800, 0.3 * wave, time) * 100;
          context.lineTo(x, y + height * 0.5);
        }

        context.stroke();
        context.closePath();
      }

      animationId = requestAnimationFrame(render);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [backgroundFill, blur, colors, noise, speed, waveOpacity, waveWidth]);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{ width: "100%" }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
