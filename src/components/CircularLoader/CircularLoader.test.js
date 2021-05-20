import { render } from "@testing-library/react";

import CircularLoader from "./CircularLoader";

describe("<CircularLoader />", () => {
  const radius = 85;
  const stroke = 10;

  const renderLoader = (progress = 0) => {
    return render(
      <CircularLoader radius={radius} stroke={stroke} progress={progress} />
    );
  };

  it("renders correctly", () => {
    const { container } = renderLoader();

    expect(container).toMatchSnapshot();
  });

  it("renders an svg element correctly", () => {
    const { container } = renderLoader();

    const svgElement = container.querySelector("svg");
    expect(svgElement).toBeInTheDocument();

    const expected = (2 * radius).toString();
    expect(svgElement).toHaveAttribute("width", expected);
    expect(svgElement).toHaveAttribute("height", expected);
  });

  it("renders the background circle correctly", () => {
    const { container } = renderLoader();

    const bgCircle = container.querySelectorAll("circle")[0];
    const { normalizedRadius, circumference } = getCircleAttributes(
      radius,
      stroke
    );

    expect(bgCircle).toHaveAttribute("stroke-width", String(stroke));
    expect(bgCircle).toHaveAttribute("cx", String(radius));
    expect(bgCircle).toHaveAttribute("cy", String(radius));
    expect(bgCircle).toHaveAttribute("r", String(normalizedRadius));
    expect(bgCircle).toHaveAttribute(
      "stroke-dasharray",
      `${circumference} ${circumference}`
    );
  });

  it("renders the rotating circle correctly", () => {
    const { container } = renderLoader();

    const rotatingCircle = container.querySelectorAll("circle")[1];
    const { normalizedRadius, circumference, strokeDashoffset } =
      getCircleAttributes(radius, stroke);

    expect(rotatingCircle).toHaveAttribute("stroke-width", String(stroke));
    expect(rotatingCircle).toHaveAttribute("cx", String(radius));
    expect(rotatingCircle).toHaveAttribute("cy", String(radius));
    expect(rotatingCircle).toHaveAttribute("r", String(normalizedRadius));
    expect(rotatingCircle).toHaveAttribute(
      "stroke-dasharray",
      `${circumference} ${circumference}`
    );
    expect(rotatingCircle).toHaveAttribute(
      "stroke-dashoffset",
      String(strokeDashoffset)
    );
  });

  test("the rotating circle's 'stroke-dashoffset' attribute is updating when progress has changed", () => {
    const { container, rerender } = renderLoader();

    const rotatingCircle = container.querySelectorAll("circle")[1];
    const { circumference, strokeDashoffset } = getCircleAttributes(
      radius,
      stroke
    );

    expect(rotatingCircle).toHaveAttribute(
      "stroke-dashoffset",
      String(strokeDashoffset)
    );

    const progress = 40;
    rerender(
      <CircularLoader radius={radius} stroke={stroke} progress={progress} />
    );

    const strokeDashoffsetUpdated =
      circumference - (progress / 100) * circumference;

    expect(rotatingCircle).toHaveAttribute(
      "stroke-dashoffset",
      String(strokeDashoffsetUpdated)
    );
  });

  it("renders the progress label correctly", () => {
    const progress = 40;
    const { getByTestId } = renderLoader(40);

    expect(getByTestId("progress-label")).toHaveTextContent(progress);
  });
});

const getCircleAttributes = (radius, stroke) => {
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (0 / 100) * circumference;

  return {
    normalizedRadius,
    circumference,
    strokeDashoffset,
  };
};
