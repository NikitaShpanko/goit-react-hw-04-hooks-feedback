const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <li className="item" key={id}>
      <span className={"status" + (isOnline ? " is-online" : "")}></span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
