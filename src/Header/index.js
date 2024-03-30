import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
  <div className="header-container">
    <h1 className="wedding">Wedding</h1>
    <div className="header-elements">
      <Link to="/FunZippy-Assignment/home" className="link">
        <p className="header-text">Home</p>
      </Link>
      <Link to="/FunZippy-Assignment/schedules" className="link">
        <p className="header-text">Schedules</p>
      </Link>
      <Link to="/FunZippy-Assignment/rsvp" className="link">
        <p className="header-text">RSVP</p>
      </Link>
      <Link to="/FunZippy-Assignment/gallery" className="link">
        <p className="header-text">Gallery</p>
      </Link>
      <Link to="/FunZippy-Assignment/gift-registery" className="link">
        <p className="header-text">Gift Registery</p>
      </Link>
    </div>
  </div>
);

export default Header;
