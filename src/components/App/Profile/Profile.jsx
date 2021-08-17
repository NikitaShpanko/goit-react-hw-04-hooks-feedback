import titleCase from "../../../js/titleCase";

function Profile({ data }) {
  return (
    <div className="profile">
      <div className="description">
        <img src={data.avatar} alt="Аватар пользователя" className="avatar" />
        <p className="name">{data.name}</p>
        <p className="tag">@{data.tag}</p>
        <p className="location">{data.location}</p>
      </div>

      <ul className="stats">
        {Object.entries(data.stats).map(([label, quantity]) => (
          <li key={label}>
            <span className="label">{titleCase(label)}</span>
            <span className="quantity">{quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
