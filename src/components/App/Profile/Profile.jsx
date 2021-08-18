import PropTypes from "prop-types";

import titleCase from "../../../js/titleCase";

function Profile({ avatar, name, tag, location, stats }) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        {Object.entries(stats).map(([label, quantity]) => (
          <li key={label}>
            <span className="label">{titleCase(label)}</span>
            <span className="quantity">{quantity}</span>
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
