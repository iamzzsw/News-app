import { render, fireEvent } from "@testing-library/react";
import LoadMoreButton from "./LoadMoreButton";

describe("LoadMoreButton", () => {
  it("renders without crashing", () => {
    render(<LoadMoreButton onClick={() => {}} />);
  });


  it("calls onClick handler when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<LoadMoreButton onClick={onClickMock} />);
    const button = getByText("load more");

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });


});
