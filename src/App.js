import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Introduction from "./pages/introduction/Introduction";
import Bootstrap from "./pages/bootstrap/Bootstrap";
import Sass from "./pages/sass/Sass";
import Css from "./pages/css/Css";
import Database from "./pages/database/Database";
import Bibliography from "./pages/bibliography/Bibliography";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/*" element={<Bibliography/>}/>
        <Route path="/introduction" element={<Introduction/>}/>
        <Route path="/bootstrap" element={<Bootstrap/>}/>
        <Route path="/sass" element={<Sass/>}/>
        <Route path="/css" element={<Css/>}/>
        <Route path="/database" element={<Database/>}/>
      </Routes>
    </Router>
  );
};

export default App;
