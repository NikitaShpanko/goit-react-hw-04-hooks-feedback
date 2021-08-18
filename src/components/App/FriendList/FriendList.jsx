import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};

export default FriendList;
