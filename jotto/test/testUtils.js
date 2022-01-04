import checkPropTypes from "check-prop-types";
import { ShallowWrapper } from "enzyme";
import rootReducer from "../src/reducers";
import { createStore } from "redux";

/**
 * Create a testing store with imported reducers, middleware,and initial state.
 * globals: rootReducer.
 * @param {object} initialState - initial state for store.
 * @returns {Store} - Redux store.
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};

/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkPT = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
