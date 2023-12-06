import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Main from "./Main";

jest.mock("node-fetch", () => require("fetch-mock-jest").sandbox());

describe("Main", () => {
  it("renders without crashing", () => {
    render(<Main />);
  });

  it("displays default content if no search or sort value provided", async () => {
    const { getByText } = render(<Main />);
    expect(getByText("Default Content")).toBeInTheDocument();
  });

 

  it("updates search value on input change", async () => {
    const { getByPlaceholderText } = render(<Main />);
    const searchInput = getByPlaceholderText("Search");

    userEvent.type(searchInput, "Bitcoin");

    expect(searchInput).toHaveValue("Bitcoin");
  });

  it("updates sort value on select change", async () => {
    const { getByLabelText } = render(<Main />);
    const sortSelect = getByLabelText("Sort By");

    userEvent.selectOptions(sortSelect, "Latest");

    expect(sortSelect).toHaveValue("latest");
  });
});
