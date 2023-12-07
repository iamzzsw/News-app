import { render, screen } from "@testing-library/react";
import Typography from "./Typography";

describe("Typography Component", () => {
  it("renders default variant and color correctly", () => {
    render(<Typography>Hello, World!</Typography>);

    const defaultTypography = screen.getByText("Hello, World!");
    expect(defaultTypography).toBeInTheDocument();
    expect(defaultTypography.tagName.toLowerCase()).toBe("p");
    expect(defaultTypography).toHaveClass("primary");
  });

  it("renders specified variant correctly", () => {
    render(<Typography variant="h2">Heading</Typography>);

    const heading = screen.getByText("Heading");
    expect(heading).toBeInTheDocument();
    expect(heading.tagName.toLowerCase()).toBe("h2");
  });

  it("renders specified color correctly", () => {
    render(<Typography color="secondary">Secondary Text</Typography>);

    const secondaryText = screen.getByText("Secondary Text");
    expect(secondaryText).toBeInTheDocument();
    expect(secondaryText).toHaveClass("secondary");
  });

  it("applies custom className correctly", () => {
    render(<Typography className="customClass">Custom Text</Typography>);

    const customText = screen.getByText("Custom Text");
    expect(customText).toBeInTheDocument();
    expect(customText).toHaveClass("customClass");
  });

  it("renders children correctly", () => {
    render(
      <Typography>
        <span>Child Span</span>
      </Typography>
    );

    const childSpan = screen.getByText("Child Span");
    expect(childSpan).toBeInTheDocument();
    expect(childSpan.tagName.toLowerCase()).toBe("span");
  });
});
