import "./App.css";

import AllRoutes from "./Routes/AllRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Layouts/NavBar/NavBar";
import Footer from "./Layouts/Footer/Footer";

function App() {
  return (
    <>
      <Router>
      <NavBar/>
        <AllRoutes />
        <Footer/>
      </Router>
    </>
  );
}

export default App;
