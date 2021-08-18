import PropTypes from "prop-types";
import titleCase from "../../../js/titleCase";
import css from "./Profile.module.css";

function Profile({ avatar, name, tag, location, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="Аватар пользователя" className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        {Object.entries(stats).map(([label, quantity]) => (
          <li key={label}>
            <span className={css.label}>{titleCase(label)}</span>
            <span className={css.quantity}>{quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
