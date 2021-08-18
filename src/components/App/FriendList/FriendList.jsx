import PropTypes, { arrayOf } from "prop-types";

import FriendListItem from "./FriendListItem/FriendListItem";

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
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
  friends: PropTypes.arrayOf(FriendListItem), //????
};

export default FriendList;
