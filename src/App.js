import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Introduction from "./pages/Introduction";
import Bootstrap from "./pages/bootstrap/Bootstrap";
import Sass from "./pages/Sass";
import Css from "./pages/Css";
import JavaScript from "./pages/JavaScript";
import Database from "./pages/Database";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/*" element={<Home/>}/>
        <Route path="/introduction" element={<Introduction/>}/>
        <Route path="/bootstrap" element={<Bootstrap/>}/>
        <Route path="/sass" element={<Sass/>}/>
        <Route path="/css" element={<Css/>}/>
        <Route path="/javaScript" element={<JavaScript/>}/>
        <Route path="/database" element={<Database/>}/>
      </Routes>
    </Router>
  );
};

export default App;
