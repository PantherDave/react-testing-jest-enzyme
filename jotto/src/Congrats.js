import React from "react";
import PropTypes from "prop-types";

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props
 * @returns {JSX.Element}
 */
const Congrats = ({ success }) => {
  if (success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congrats! You guessed the word! 🎉🎊
        </span>
      </div>
    );
  }
  return <div data-test="component-congrats"></div>;
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
