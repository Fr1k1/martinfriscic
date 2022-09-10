import "./Sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../other/images/logo.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouseUser} from "@fortawesome/free-solid-svg-icons";
import {faUserNinja} from "@fortawesome/free-solid-svg-icons"
import { faIdCard } from "@fortawesome/free-solid-svg-icons";


const Sidebar = () => {
  return (
    <div className="navbar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" class="logo-slika"></img>
      </Link>

      <nav>
        <NavLink exact="true" activeclassname="active" className="home-link" to="/home">
        <FontAwesomeIcon icon={faHouseUser} color="#4d4d4e"/>

        </NavLink>

        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUserNinja} color="#4d4d4e"  />

        </NavLink>

        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faIdCard} color="#4d4d4e"/>

        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
