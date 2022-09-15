import ProfileImage from "./ProfileImage";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function Card() {
  return (
    <div className="card">
      <ProfileImage />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Card;
