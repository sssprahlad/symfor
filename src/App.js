import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate,Outlet } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About us/About";
import Contact from "./components/Contact/Contact";
import Recipes from "./components/Recipes/Recipes";
import Blogs from "./components/Blogs/Blogs";
import Login from "./components/UsersDetails/Login/Login";
import { UserProvider,UserContext } from "./context/Context";
import { useContext } from "react";

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(UserContext);

  console.log(isAuthenticated,"is Auth")

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};




function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/recipes" element={<Recipes />} />
          </Route>

          {/* Public Routes */}
          <Route path="/login" element={<Login />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
