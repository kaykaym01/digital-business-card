import profileImg from "../img/profile-image.jpeg";

function ProfileImage() {
  return (
    <div className="profile-img-container">
      <img src={profileImg} alt="Kayla Moore" className="profile-img"></img>
    </div>
  );
}

export default ProfileImage;
