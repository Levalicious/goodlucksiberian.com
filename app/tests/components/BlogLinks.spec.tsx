import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { BlogLinks } from "~/components/BlogLinks";

describe("BlogLinks", () => {
  test("renders blog internal links", () => {
    render(<BlogLinks />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getAllByRole("link")).toHaveLength(4);
    expect(screen.getByText("News")).toBeDefined();
    expect(screen.getByText("My Cats")).toBeDefined();
    expect(screen.getByText("Tags")).toBeDefined();
    expect(screen.getByText("About")).toBeDefined();
  });
});
