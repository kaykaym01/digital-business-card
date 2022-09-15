import ProfileImage from "./ProfileImage";
import Content from "./Content";
import Footer from "./Footer";

function Card() {
  return (
    <div className="card">
      <ProfileImage />
      <Content />
      <Footer />
    </div>
  );
}

export default Card;
