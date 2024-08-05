import { BrowserRouter, Routes, Route } from "react-router-dom";
//import RoutesData from "./RoutesData";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Events from "./Pages/Events";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Projects from "./Pages/Projects";
// import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout></Layout>}>
            <Route index element={<Home></Home>}></Route>
            <Route path="about-us" element={<AboutUs></AboutUs>}></Route>
            <Route path="team" element={<Team></Team>}></Route>
            <Route path="projects" element={<Projects></Projects>}></Route>
            <Route path="events" element={<Events></Events>}></Route>
            <Route path="contact-us" element={<ContactUs></ContactUs>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
