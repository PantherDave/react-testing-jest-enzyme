import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr, checkPT } from "../test/testUtils";
import Input from "./Input";
import { findAllInRenderedTree } from "react-dom/test-utils";

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} props - Component porps specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<Input {...setupProps} />);
};

test("Input renders without error", () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, "component-input");
  expect(inputComponent.length).toBe(1);
});
