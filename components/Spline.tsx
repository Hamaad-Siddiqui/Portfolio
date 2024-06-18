"use client";

import { lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

function getWidth() {
  const { innerWidth: width } = window;
  return width;
}

export default function Chips() {
  if (typeof window !== "undefined" && getWidth() < 1025) return null;
  return (
    <Spline
      className="lg:block hidden"
      scene="https://prod.spline.design/VAJ9Nf1Q4o5eEJU5/scene.splinecode"
      id="chips"
    />
  );
}
