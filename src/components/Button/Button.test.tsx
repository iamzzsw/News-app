import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; 
import Button from "./Button";

describe("Button", () => {
  it("renders with default primary color", () => {
    const { getByText } = render(<Button>Click me</Button>);
    const button = getByText("Click me");

    expect(button).toHaveClass("button");
    expect(button).toHaveClass("primary");
  });

  it("renders with specified color (secondary)", () => {
    const { getByText } = render(<Button color="secondary">Click me</Button>);
    const button = getByText("Click me");

    expect(button).toHaveClass("button");
    expect(button).toHaveClass("secondary");
  });

  it("calls onClick handler when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button onClick={onClickMock}>Click me</Button>);
    const button = getByText("Click me");

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

});
