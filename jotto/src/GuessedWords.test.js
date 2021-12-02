import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr, checkPT } from "../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} props - Component porps specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkPT(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("renders intructions to guess a word", () => {
    const instructions = findByTestAttr(wrapper, "component-instructions");
    expect(instructions.text().length).not.toBe(1);
  });
});

describe("if there are words guessed", () => {});
