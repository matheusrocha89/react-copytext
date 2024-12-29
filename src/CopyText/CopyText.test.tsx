import React from "react";
import { render, screen } from "@testing-library/react";
import { CopyText } from "./CopyText";

describe("CopyText", () => {
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

  describe("behavior", () => {
    beforeEach(() => {
      Object.defineProperty(navigator, "clipboard", {
        value: { writeText: vi.fn(() => Promise.resolve()) },
        writable: true,
      });
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

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
