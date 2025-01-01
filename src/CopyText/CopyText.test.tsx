import React from "react";
import { render, screen } from "@testing-library/react";
import { CopyText } from "./CopyText";

describe("CopyText", () => {
  beforeEach(() => {
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: vi.fn(() => Promise.resolve()) },
      writable: true,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should render the text", () => {
    render(<CopyText text="Hello, World!" />);
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });

  it("should render the copy button when text is not copied", () => {
    render(<CopyText text="Hello, World!" />);
    expect(screen.getByText("Copy")).toBeInTheDocument();
  });

  it("should render the copied button when text is copied", () => {
    render(<CopyText text="Hello, World!" copied />);
    expect(screen.getByText("Copied")).toBeInTheDocument();
  });

  it("should render the copy icon when showIcon is true", () => {
    render(<CopyText text="Hello, World!" />);
    expect(screen.getByTestId("copy-icon")).toBeInTheDocument();
  });

  it("should render the copied icon when copied is true", () => {
    render(<CopyText text="Hello, World!" copied />);
    expect(screen.getByTestId("copied-icon")).toBeInTheDocument();
  });

  it("should not render any icon when showIcon is false", () => {
    render(<CopyText text="Hello, World!" showIcon={false} />);
    expect(screen.queryByTestId("copy-icon")).not.toBeInTheDocument();
    expect(screen.queryByTestId("copied-icon")).not.toBeInTheDocument();
  });

  it("should display the copy button label", () => {
    render(<CopyText text="Hello, World!" copyButtonLabel="Copy me!" />);
    expect(screen.getByText("Copy me!")).toBeInTheDocument();
  });

  it("should display the copied button label", async () => {
    render(
      <CopyText text="Hello, World!" copied copiedButtonLabel="Copied!" />
    );
    await screen.getByRole("button").click();
    expect(screen.getByText("Copied!")).toBeInTheDocument();
  });

  describe("behavior", () => {
    it("should copy the text when the button is clicked", async () => {
      render(<CopyText text="Let's copy text" />);
      await screen.getByText("Copy").click();
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
        "Let's copy text"
      );
    });

    it("should call onClick when the button is clicked", async () => {
      const onClick = vi.fn();
      render(<CopyText text="Hello, World!" onClick={onClick} />);
      await screen.getByText("Copy").click();
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
