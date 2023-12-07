import { mount } from "enzyme";
import Footer from "./Footer";
import { act } from "react-dom/test-utils";

jest.mock("../../hooks/usePersistedState", () => ({
  usePersistedState: jest.fn((config) => useState(config.initialValue)),
}));

describe("Footer Component", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it("changes theme on button click", () => {
    const wrapper = mount(<Footer />);
    const button = wrapper.find(".button");

    expect(button.text()).toBe("light");

    act(() => {
      button.simulate("click");
    });

    expect(button.text()).toBe("dark");
  });

  it("sets body dataset theme on theme change", () => {
    const wrapper = mount(<Footer />);
    const button = wrapper.find(".button");

    expect(document.body.dataset.theme).toBeUndefined();

    act(() => {
      button.simulate("click");
    });

    expect(document.body.dataset.theme).toBe("dark");
  });
});
