"use client";
import { lazy, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function Chips() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  if (windowDimensions.width < 1024) return null;
  return (
    <Spline
      className="lg:block hidden"
      scene="https://prod.spline.design/VAJ9Nf1Q4o5eEJU5/scene.splinecode"
      id="chips"
    />
  );
}
