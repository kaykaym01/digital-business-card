import profileImg from "../img/profile-image.jpeg";

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
          Email
        </a>
        <a href="https://www.linkedin.com/in/kayla-moore/" className="contact-link" id="linkedin-link" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </header>
  );
}

export default Header;
