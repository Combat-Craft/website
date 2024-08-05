import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import combatCraftLogo from "../../assets/images/CC-logo.png";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import NavToggle from "./NavMenu/NavToggle";

export default function NavBar({ isActive, setIsActive }) {
  return (
    <>
      <div
        style={{
          height: "5vh",
          width: "100vw",
          display: "flex",
          padding: "2vh",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <div>
          <Link to={"/"}>
            <img
              src={combatCraftLogo}
              alt="home-logo"
              style={{
                width: "15vh",
                height: "7.5vh",
                boxSizing: "border-box",
              }}
            />
          </Link>
        </div>
        <NavToggle isActive={isActive} setIsActive={setIsActive}></NavToggle>
      </div>
    </>
  );
}
