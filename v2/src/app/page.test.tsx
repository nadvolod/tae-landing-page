import { render, screen } from "@testing-library/react";
import Home from "./page";

test("renders without crashing", () => {
  render(<Home />);
});

test("renders static text content", () => {
  render(<Home />);
  expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
  expect(screen.getByText(/src\/app\/page.tsx/i)).toBeInTheDocument();
});

test("renders link to Vercel correctly", () => {
  render(<Home />);
  const linkElement = screen.getByRole("link");
  expect(linkElement).toHaveAttribute(
    "href",
    "https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  );
  expect(linkElement).toHaveAttribute("target", "_blank");
});

test("applies correct CSS classes", () => {
  render(<Home />);
  const mainElement = screen.getByRole("main");
  expect(mainElement).toHaveClass(
    "flex min-h-screen flex-col items-center justify-between p-24"
  );
});
