import { Link } from "react-router-dom";
import logoOrange from "../../assets/logo_orange.png";

const navigationRoutes = [
  {
    routeName: "Home",
    path: "/",
  },
  { routeName: "Streams", path: "streams" },
  { routeName: "Team", path: "team" },
  { routeName: "Events", path: "events" },
  { routeName: "Contact Us", path: "contact-us" },
];

export default function NavBar() {
  return (
    <>
      <div className="navbar-main-div">
        <div className="navbar-second-div">
          <div className="navbar-combat-craft-logo">
            <img src={logoOrange} alt="Combat Craft Logo" />
          </div>
          <div className="navbar-links-main">
            {navigationRoutes.map((route) => {
              return (
                <div className="navbar-links-div">
                  <Link to={route.path} className="navbar-links">
                    {route.routeName}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
