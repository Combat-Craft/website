import { Link } from "react-router-dom";
import "./NavBar.css";
import Hamburger from "./Hamburger";
import combatCraftLogo from "../../assets/images/CC-logo.png";
import orangeLogo from "../../assets/images/logo_orange.png";

export default function NavBar() {
  return (
    <>
      <div>
        <nav>
          <div>
            <img id="text-logo" className="" src={orangeLogo} alt="Text Logo" />
          </div>
          <img
            id="bot-logo"
            className=""
            src={combatCraftLogo}
            alt="Bot Logo"
          />
          <div className="nav-items">
            <ul>
              <li>
                <Link className="link">Home</Link>
              </li>
              <li>
                <Link className="link">Stream</Link>
              </li>
              <li>
                <Link className="link">Team</Link>
              </li>
              <li>
                <Link className="link">Events</Link>
              </li>
              <li>
                <Link className="link">Contact Us</Link>
              </li>
            </ul>
            <div className="hamburger-main">
              <Hamburger></Hamburger>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
