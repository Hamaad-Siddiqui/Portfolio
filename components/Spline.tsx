"use client";

import React from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function Chips() {
  return (
    <Spline
      scene="https://prod.spline.design/VAJ9Nf1Q4o5eEJU5/scene.splinecode"
      id="chips"
    />
  );
}
