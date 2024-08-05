import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Events from "./Pages/Events";
import ContactUs from "./Pages/ContactUs";

export default RoutesData = [
  {
    topRoute: {
      path: "/",
      element: <Layout></Layout>,
      subRoutes: [
        { path: "/", element: <Home></Home> },
        { path: "team", element: <Team></Team> },
        { path: "events", element: <Events></Events> },
        { path: "contact-us", element: <ContactUs></ContactUs> },
      ],
    },
  },
];
