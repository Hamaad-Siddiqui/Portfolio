"use client";
import { lazy } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Chips() {
  return (
    <Spline
      className="lg:block hidden"
      scene="https://prod.spline.design/VAJ9Nf1Q4o5eEJU5/scene.splinecode"
      id="chips"
    />
  );
}
