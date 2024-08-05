import { Outlet } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Menu from "../components/NavBar/NavMenu/Menu/Menu";

export default function Layout() {
  const [menuActive, setMenuActive] = useState(false);

  const setActivity = () => setMenuActive(!menuActive);

  return (
    <>
      <header style={{ height: "10vh", width: "100%" }}>
        <NavBar isActive={menuActive} setIsActive={setActivity}></NavBar>
      </header>
      <main
        id="main"
        style={{
          height: "90vh",
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          // alignContent: "center",
        }}>
        <AnimatePresence>
          {!menuActive ? (
            <Outlet></Outlet>
          ) : (
            <Menu isActive={menuActive} setIsActive={setActivity}></Menu>
          )}
        </AnimatePresence>
      </main>
      {/* <footer>
        <Footer></Footer>
      </footer> */}
    </>
  );
}
