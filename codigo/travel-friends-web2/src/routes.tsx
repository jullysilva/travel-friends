import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ResertPassword from "./pages/ResetPassword";
import Roadmap from "./pages/Roadmap";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reset" element={<ResertPassword />} />
        <Route path="/entrar" element={<SignIn />} />
        <Route path="/cadastrar" element={<SignUp />} />
        <Route path="/Roteiro" element={<Roadmap />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
