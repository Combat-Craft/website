import { BrowserRouter, Routes, Route } from "react-router-dom";
import StdLayout from "./Pages/StandardLayout/StdLayout";
import "./App.css";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<StdLayout></StdLayout>}>
          <Route index element={<Home></Home>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
