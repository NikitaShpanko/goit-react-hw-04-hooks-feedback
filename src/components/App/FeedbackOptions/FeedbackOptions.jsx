import css from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((name) => (
        <button className={css.button} type="button" key={name} name={name} onClick={onLeaveFeedback}>
          {name}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
