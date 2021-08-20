import css from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <div className={css.section}>
      <h2 className={css.title}>{title}</h2>
      <div className={css.content}>{children}</div>
    </div>
  );
};

export default Section;
