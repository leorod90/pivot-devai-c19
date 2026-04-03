export default function ProfileCard(props) {
  return (
    <div className="profile-card">
      <h2 className="profile-name">
        {props.name}
      </h2>

      <p className="profile-age">
        Age: {props.age}
      </p>

      <img
        className="profile-avatar"
        src={props.image}
        alt="profile"
      />
    </div>
  );
}