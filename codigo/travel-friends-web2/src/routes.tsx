import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { userHook } from "./context/userData";

import Home from "./pages/Home";
import ResertPassword from "./pages/ResetPassword";
import Roadmap from "./pages/Roadmap";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Place from './pages/Place';

function AppRoutes() {
  const { userData } = userHook();

  return (
    <Router>
      <Routes>
        <Route path="/painel" element={<Home />} />
        <Route path="/reset" element={<ResertPassword />} />
        <Route index path="/entrar" element={<SignIn />} />
        <Route path="/cadastrar" element={<SignUp />} />
        {/* <Route element={<ProtectedRoute user={userData} />}> */}
          <Route path="/roteiro" element={<Home />} />
          <Route path="/cadastrar-roteiro" element={<Roadmap />} />
          <Route path="/cadastrar-local" element={<Place />} />
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
