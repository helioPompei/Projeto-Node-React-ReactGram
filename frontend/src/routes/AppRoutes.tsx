// React router dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Pages
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
// Components
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
// Hooks
import { useAuth } from "../hooks/authHook";

export const AppRoutes = () => {
  const { auth, loadding } = useAuth();

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={auth ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/login"
          element={!auth ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!auth ? <Register /> : <Navigate to="/" />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
