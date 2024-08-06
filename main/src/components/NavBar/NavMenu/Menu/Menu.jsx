import { AnimatePresence, color, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { scale } from "../anim";
import { SiInstagram } from "react-icons/si";
import { PiGithubLogo } from "react-icons/pi";
import { PiRedditLogoLight } from "react-icons/pi";
import { FaDrupal, FaLinkedin } from "react-icons/fa6";

export default function Menu({ isActive, setIsActive }) {
  const date = new Date();

  const menuRoutes = [
    { menuRouteName: "About Us", menuRouteIcon: "", path: "about-us" },
    { menuRouteName: "Our Team", menuRouteIcon: "", path: "team" },
    { menuRouteName: "Projects", menuRouteIcon: "", path: "projects" },
    { menuRouteName: "Events", menuRouteIcon: "", path: "events" },
    { menuRouteName: "Contact Us", menuRouteIcon: "", path: "contact-us" },
  ];
  const socialRoutes = [
    {
      socialName: "Instagram",
      socialIcon: <SiInstagram></SiInstagram>,
      path: "https://www.instagram.com/tmu_combatcraft/",
      color: "purple",
    },
    {
      socialName: "GitHub",
      socialIcon: <PiGithubLogo></PiGithubLogo>,
      path: "https://github.com/Combat-Craft/",
      color: "#171515",
    },
    // {
    //   socialName: "Reddit",
    //   socialIcon: <PiRedditLogoLight></PiRedditLogoLight>,
    //   path: "",
    //   color: "#ff5700",
    // },
    {
      socialName: "LinkedIn",
      socialIcon: <FaLinkedin></FaLinkedin>,
      path: "https://ca.linkedin.com/company/tmucombatcraft",
      color: "#0077B5",
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        // whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        style={{
          width: "80vw",
          height: "90%",
          backgroundColor: "linen",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          borderRadius: "2.5vh",
          // border: "0.5vh solid palegreen",
          // boxShadow:
          //   "0.5vh 0.5vh 0.5vh linen, 0.5vh 0.5vh 0.5vh 2vh linen inset",
        }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "60%",
            height: "90%",
          }}>
          <div
            style={{
              backgroundColor: "transparent",
              borderRight: "0.125vh solid black",
              width: "50%",
              height: "80%",
              textWrap: "nowrap",
            }}>
            <ul>
              {menuRoutes.map((item) => {
                return (
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      paddingBottom: "15%",
                      textDecoration: "none",
                    }}>
                    <Link
                      to={item.path}
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}>
                      <motion.button
                        whileHover={{
                          backgroundColor: "springgreen",
                          // color: "linen",
                          cursor: "pointer",
                          textDecoration: "none",
                          border: "none",
                          scale: 1.2,
                        }}
                        whileTap={{ scale: 0.8 }}
                        onClick={{ setIsActive }}
                        style={{
                          backgroundColor: "transparent",
                          borderRadius: "2.5vh",
                          height: "4vh",
                          width: "10vw",
                          border: "none",
                        }}>
                        <h2
                          style={{
                            color: "black",
                          }}>{`${item.menuRouteIcon} ${item.menuRouteName}`}</h2>
                      </motion.button>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            style={{
              backgroundColor: "transparent",
              borderLeft: "0.125vh solid black",
              width: "50%",
              height: "80%",
              textWrap: "nowrap",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              font: "Arial",
            }}>
            <div style={{ color: "black" }}>
              <h3 style={{ paddingBottom: "10%" }}>Location</h3>
              <p>20 Dundas St W Suite 921,</p>
              <p>Toronto, ON</p>
              <p>M5G2H1</p>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "7.5vh",
                flexDirection: "row",
              }}>
              {socialRoutes.map((item) => {
                return (
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    style={{ paddingRight: "10%" }}>
                    <Link to={item.path} style={{ color: item.color }}>
                      {item.socialIcon}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            <div
              style={{
                alignItems: "flex-end",
                textAlign: "center",
                color: "black",
              }}>
              <p style={{ paddingBottom: "20%" }}>Powered By IBZ @ TMU</p>
              <p>Copyright © {date.getFullYear()} Combat Craft</p>
              <p>All Rights Reserved</p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
