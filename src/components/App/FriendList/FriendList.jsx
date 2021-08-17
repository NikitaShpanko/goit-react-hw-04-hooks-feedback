function FriendList({ data }) {
  return (
    <ul className="friend-list">
      {data.map(({ avatar, name, isOnline, id }) => (
        <li className="item" key={id}>
          <span className={"status" + (isOnline ? " is-online" : "")}></span>
          <img className="avatar" src={avatar} alt="" width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
