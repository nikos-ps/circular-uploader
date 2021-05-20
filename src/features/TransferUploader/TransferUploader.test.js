import { render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";

import { theme, GlobalStyles } from "theme";

import TransferUploader from "./TransferUploader";

describe("Features <TransferUploader />", () => {
  const renderUploader = () => {
    return render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <TransferUploader />
      </ThemeProvider>
    );
  };

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it("renders correctly", () => {
    const { container } = renderUploader();

    expect(container).toMatchSnapshot();
  });

  it("has a button with text 'start' when loaded", () => {
    const { getByRole } = renderUploader();

    expect(getByRole("button")).toHaveTextContent("Start");
  });

  it("has a circular loader svg", () => {
    const { getByTestId } = renderUploader();

    expect(getByTestId("circular-loader")).toBeInTheDocument();
  });

  it("starts the loader when 'start' button is clicked", () => {
    const { getByRole } = renderUploader();

    userEvent.click(getByRole("button"));

    act(() => jest.advanceTimersByTime(500));

    expect(setInterval).toHaveBeenCalledTimes(1);
  });

  it("shows the 'end' button after the loader has started", () => {
    const { getByRole } = renderUploader();

    userEvent.click(getByRole("button"));

    act(() => jest.advanceTimersByTime(500));

    expect(getByRole("button")).toHaveTextContent("End");
  });

  it("updates the loader's progress label correctly", () => {
    const { getByRole, getByTestId } = renderUploader();

    userEvent.click(getByRole("button"));

    act(() => jest.advanceTimersByTime(1000));

    expect(getByTestId("progress-label")).toHaveTextContent(2);
  });

  it("resets the loader's progress label when 'end' button is clicked", () => {
    const { getByRole, getByTestId } = renderUploader();

    userEvent.click(getByRole("button"));

    act(() => jest.advanceTimersByTime(1000));

    userEvent.click(getByRole("button"));

    expect(getByTestId("progress-label")).toHaveTextContent(0);
  });
});
