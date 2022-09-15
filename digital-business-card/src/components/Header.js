import profileImg from "../img/profile-image.jpeg";
import mailIcon from "../img/Mail.png";
import linkedinIcon from "../img/linkedin.png";

function Header() {
  return (
    <header className="header">
      <div className="header-img">
        <img src={profileImg} alt="Kayla Moore" className="profile-img"></img>
      </div>
      <div className="header-text">
        <h1 className="name">Kayla Moore</h1>
        <p className="role">Frontend Developer</p>
      </div>
      <div className="header-links">
        <a href="mailto:kaymoore01@gmail.com" className="contact-link" id="email-link">
          <img src={mailIcon} />
          Email
        </a>
        <a href="https://www.linkedin.com/in/kayla-moore/" className="contact-link" id="linkedin-link" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} />
          LinkedIn
        </a>
      </div>
    </header>
  );
}

export default Header;
