// React router dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Pages
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Profile } from "../pages/Profile";
import { Photo } from "../pages/Photo";
import Search from "../pages/Search";
// Components
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
// Hooks
import { EditProfile } from "../pages/EditProfile";
import { useAppSelector } from "../redux/store";


export const AppRoutes = () => {
  const { user } = useAppSelector((store) => store.auth);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />

        <Route
          path="/profile"
          element={user ? <EditProfile /> : <Navigate to="/login" />}
        />
        <Route
          path="/users/:id"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />

        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />

        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />

        <Route
          path="/search"
          element={user ? <Search /> : <Navigate to="/login" />}
        />

        <Route
          path="/photos/:id"
          element={user ? <Photo /> : <Navigate to="/login" />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};
