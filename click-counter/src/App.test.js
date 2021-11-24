import { render, screen } from "@testing-library/react";
import App from "./App";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

// set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("renders without errors", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("renders decrement button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("counter display starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test("clicking button increments counter display", () => {
  const wrapper = setup();

  // find the button
  const button = findByTestAttr(wrapper, "increment-button");

  // click the button
  button.simulate("click");

  // find the display, and test that the number has been incremented
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});

test("clicking decrement button decreases counter display when state is greater than 0", () => {
  const wrapper = setup();

  // find the increment button
  const incButton = findByTestAttr(wrapper, "increment-button");
  incButton.simulate("click");

  // find the decrement button
  const decButton = findByTestAttr(wrapper, "decrement-button");
  decButton.simulate("click");

  // find the display, and test that the number has been incremented
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test("error message hidden when not needed", () => {
  const wrapper = setup();
  const errorDiv = findByTestAttr(wrapper, "error-message");

  const errorHasHiddenClass = errorDiv.hasClass("hidden");
  expect(errorHasHiddenClass).toBe(true);
});

describe("counter is 0 and decrement is clicked", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();

    const button = findByTestAttr(wrapper, "decrement-button");
    button.simulate("click");
  });
  test("error appears", () => {
    const errorDiv = findByTestAttr(wrapper, "error-message");

    const errorHasHiddenClass = errorDiv.hasClass("hidden");
    expect(errorHasHiddenClass).toBe(false);
  });
  test("counter still displays 0", () => {
    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("0");
  });
  test("clicking increment clear the error", () => {
    const incButton = findByTestAttr(wrapper, "increment-button");
    incButton.simulate("click");
    const errorDiv = findByTestAttr(wrapper, "error-message");
    const errorHasHiddenClass = errorDiv.hasClass("hidden");
    expect(errorHasHiddenClass).toBe(true);
  });
});
