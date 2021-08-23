import PropTypes from "prop-types";

import css from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((name) => (
        <button
          className={css.button}
          type="button"
          key={name}
          name={name}
          onClick={onLeaveFeedback}
        >
          {name}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
