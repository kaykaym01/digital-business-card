import githubIcon from "../img/github-icon.png";
function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/kaykaym01/" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="link-to-github" className="github-icon"></img>
      </a>
    </footer>
  );
}

export default Footer;
