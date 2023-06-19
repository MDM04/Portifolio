import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Introduction from "./pages/introduction/Introduction";
import Bootstrap from "./pages/bootstrap/Bootstrap";
import JavaScript from "./pages/javaScript/JavaScript";
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
        <Route path="/database" element={<JavaScript/>}/>
      </Routes>
    </Router>
  );
};

export default App;
