import React, { useMemo } from "react";

import { Container, Label, RotatingCircle } from "./CircularLoader.styled";

const CircularLoader = ({ radius, stroke, progress }) => {
  const normalizedRadius = useMemo(() => radius - stroke / 2, [radius, stroke]);
  const circumference = useMemo(
    () => normalizedRadius * 2 * Math.PI,
    [normalizedRadius]
  );
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <Container>
      <svg height={radius * 2} width={radius * 2} data-testid="circular-loader">
        <circle
          stroke="var(--colors-porcelain)"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        ></circle>
        <RotatingCircle
          stroke="var(--colors-dodgerBlue)"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <Label data-testid="progress-label">
        {progress}
        <span>%</span>
      </Label>
    </Container>
  );
};

export default CircularLoader;
