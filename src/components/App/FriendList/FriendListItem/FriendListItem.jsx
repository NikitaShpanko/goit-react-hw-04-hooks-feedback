import PropTypes from "prop-types";

const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <li className="item">
      <span className={"status" + (isOnline ? " is-online" : "")}></span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendListItem;
