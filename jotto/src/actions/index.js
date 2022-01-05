import axios from "axios";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
};

// /**
//  * @function correctGuess
//  * @returns {object} - Action object with type `CORRECT_GUESS`
//  */
// export function correctGuess() {
//   return { type: actionTypes.CORRECT_GUESS };
// }

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 * and (conditionally) CORRECT_GUESS action
 * @param {string} guessedWord - Guessed word
 * @returns {function} - Redux thunk function.
 */
export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {};
};

export const getSecretWord = () => {
  // TODO: write actual action in redux
  return axios.get("http://localhost:3030").then((response) => response.data);
};
